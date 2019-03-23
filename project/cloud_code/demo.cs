using System;
using System.Collections.Generic;
using System.Text;
using Inspur.Ecp.Caf.ServiceMgr;
using Inspur.GS.BF.DF.AdminOrganization.udt.AdministrativeOrganization.AdministrativeOrganization.Entity;
using Inspur.GS.BF.DF.Bank.udt.Bank.Bank.Entity;
using Inspur.GS.BF.DF.BankAccounts.Vo.Frm_BalanceOfBAInitialized_frm.Entity;
using Inspur.GS.BF.DF.BankAccountType.udt.BankAccountType.BankAccountType.Entity;
using Inspur.GS.BF.DF.Currency.udt.Currency.Currency.Entity;
using Inspur.GS.BF.DF.DFUdt.udt.DFName.DFName.Entity;
using Inspur.GS.TM.TMFnd.BalanceOfBAInitialized.BalanceOfBAInitialized.Api;
using Inspur.Gsp.Bef.Api.Lcp;
using Inspur.Gsp.Cef.Bql.Api;
using Inspur.Gsp.Cef.Entity;
using Inspur.Gsp.Cef.Entity.Condition;
using Inspur.Gsp.Common.CommonUdt.Amount.Entity;
using Inspur.Gsp.FormServer.Api.Manager;
using Inspur.Gsp.Udt.Api;

namespace Inspur.GS.TM.TMFnd.BalanceOfBAInitializedFront.ViewModel
{
	public partial class ConditionQueryVMAction
	{
		protected override void Execute() {
            // Bql拿到银行账户主实体及币种明细数据
            IBqlExecuter bqlExecuter = ServiceManager.GetService<IBqlExecuter>();
            bqlExecuter.Options.OptionType = OptionType.ExecuteSql; // 执行SQL语句
            // List<string> refEntityIDsOfBA = new List<string>();
            List<IBqlParameter> list = new List<IBqlParameter>();
            string bqlOfBA = @"SELECT bfbankaccountitems.ID,bfbankaccountitems.ParentID,bfbankaccountitems.Currency,bfbankaccountitems.AccountType,bfbankaccounttype.name as AccountTypeName,
                                bfbankaccounts.AccountName,bfbankaccounts.AccountNo,bfbankaccounts.Bank,bfbankaccounts.OpenDate,bfbankaccounts.corporationUnit,
                                bfcurrency.name_chs as CurrencyName,bfbank.name_chs as BankName,bfadminorganization.name_chs as CorporationUnitName,tmbalanceofbainitialized.initialdate,
                                tmbalanceofbainitialized.initialbalance,tmbalanceofbainitialized.currentproduct,tmbalanceofbainitialized.conventionalproduct,
                                tmbalanceofbainitialized.overdraftproduct
                                FROM bfbankaccountitems
                                LEFT JOIN bfbankaccounts ON bfbankaccountitems.ParentID = bfbankaccounts.ID
                                LEFT JOIN bfcurrency ON bfbankaccountitems.currency = bfcurrency.ID 
                                LEFT JOIN bfbank ON bfbankaccounts.bank = bfbank.ID
                                LEFT JOIN bfbankaccounttype ON bfbankaccounttype.ID = bfbankaccountitems.accounttype
                                LEFT JOIN bfadminorganization ON bfbankaccounts.corporationUnit = bfadminorganization.ID
                                LEFT JOIN tmbalanceofbainitialized on tmbalanceofbainitialized.account=bfbankaccounts.id 
                                and tmbalanceofbainitialized.currency=bfbankaccountitems.currency 
						        and tmbalanceofbainitialized.accounttype=bfbankaccountitems.accounttype
                                Where bfbankaccounttype.name = @accountTypeName and bfbankaccounts.AccountStatus = @accountStatus";
            IBqlParameter parameter = bqlExecuter.MakeInParam("accountTypeName", "活期");
            IBqlParameter parameter2 = bqlExecuter.MakeInParam("accountStatus", 2);

            List<string> refEntityDatas = new List<string>();
            StringBuilder sb = new StringBuilder(bqlOfBA);
            list.Add(parameter);
            list.Add(parameter2);
            // 法人单位
            if (this.unitId != null && this.unitId.ToString() != "")
            {
                sb.Append(" and bfbankaccounts.corporationunit = @unitId");
                list.Add(bqlExecuter.MakeInParam("unitId", this.unitId));
            }
            // 申请日期
            if(this.beginDate != null && this.beginDate.ToString() != "" && this.beginDate.ToString() != "0001/1/1 0:00:00")
            {
                sb.Append(" and bfbankaccounts.opendate >= @beginDate");
                list.Add(bqlExecuter.MakeInParam("beginDate", this.beginDate));
            }
            // 至
            if(this.endDate != null && this.endDate.ToString() != "" && this.endDate.ToString() != "0001/1/1 0:00:00")
            {
                sb.Append(" and bfbankaccounts.opendate <= @endDate");
                list.Add(bqlExecuter.MakeInParam("endDate", this.endDate));
            }
            if(this.bankId != null && this.bankId.ToString() != "")
            {
                sb.Append(" and bfbank.id = @bankId");
                list.Add(bqlExecuter.MakeInParam("bankId", this.bankId));
            }

            
            // sb.Append(" order by BizDate desc");
            
            IBqlParameter[] bqlParam = list.ToArray();
            List<dynamic> resultOfBA = bqlExecuter.ExecuteSelectStatement(sb.ToString(), refEntityDatas, bqlParam);
            // List<dynamic> resultOfBA = bqlExecuter.ExecuteSelectStatement(bqlOfBA, refEntityIDsOfBA, new IBqlParameter[] { parameter, parameter2, parameter3 });
            if (resultOfBA == null)
            {
                return;
            }
            List<IEntityData> voDatas = ConstructVoData(resultOfBA); // 将Bql拿到的数据构造成Vo实体数据
            // List<IEntityData> voDatas1 = ConstructVoDataA(resultOfBA);

            // Query拿到余额初始化记录数据
            var lcpBalance = ServiceManager.GetService<ILcpFactory>().CreateLcp("BalanceOfBAInitialized");
            var queryResultOfBalance = lcpBalance.Query(new EntityFilter());

            // 将Bql和Query拿到的数据放入上下文
            if (voDatas == null && queryResultOfBalance == null)
            {
                Result = null;
            }
            else
            {
            //Dictionary<string, List<IEntityData>> result = new Dictionary<string, List<IEntityData>>();
            //result.Add("BalanceOfBAInitialized", queryResultOfBalance);
            //result.Add("BankAccountItems", voDatas);
             Result = voDatas;
            }
        }
        private List<IEntityData> ConstructVoData(List<dynamic> bqlResult)
        {
            List<IEntityData> voDatas = new List<IEntityData>();
            #region 将bql查到的每一条数据映射成Vo数据
            foreach (dynamic item in bqlResult)
            {
                IBankAccountsView voEntity = ServiceManager.GetService<IFSManagerFactory>().GetFSManager("Frm_BalanceOfBAInitialized_frm").CreateData() as IBankAccountsView;
                // 将VO数据的ID修改为币种明细的ID，使得界面展示的每条数据具有唯一标识，前端bindingData可识别

                voEntity.ID = item.ID;
                voEntity.AccountName = item.AccountName;
                voEntity.AccountNo = item.AccountNo;
                voEntity.OpenDate = item.OpenDate;
                voEntity.BAID = item.ParentID;

                if (item.InitialDate.ToString() != "")
                {
                    voEntity.InitialDate = item.InitialDate;
                }
                if (item.CurrentProduct.ToString() != "")
                {
                    voEntity.CurrentProduct = item.CurrentProduct;
                }
                if (item.ConventionalProduct.ToString() != "")
                {
                    voEntity.ConventionalProduct = item.ConventionalProduct;
                }
                if (item.OverDraftProduct.ToString() != "")
                {
                    voEntity.OverDraftProduct = item.OverDraftProduct;
                }

                // 构造InitialDate业务字段
                IAmount InitialBalance = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.Gsp.Common.CommonUdt.Amount").CreateDataType() as IAmount;
                decimal dec = item.InitialBalance.ToString() != "" ? item.InitialBalance : 0M;
                InitialBalance.Amount = dec;
                voEntity.InitialBalance = InitialBalance;
                           
                // 构造CorporationUnit业务字段
                IAdministrativeOrganization corporationUnit = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.AdminOrganization.udt.AdministrativeOrganization.AdministrativeOrganization").CreateDataType() as IAdministrativeOrganization;
                AdministrativeOrganizationInfo administrativeOrganizationInfo = new AdministrativeOrganizationInfo();
                administrativeOrganizationInfo.AdministrativeOrganization = item.corporationUnit;
                IDFName corporationUnitName = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.DFUdt.udt.DFName.DFName").CreateDataType() as IDFName;
                corporationUnitName.DFName = item.CorporationUnitName;
                administrativeOrganizationInfo.AdministrativeOrganization_Name = corporationUnitName;
                corporationUnit.AdministrativeOrganization = administrativeOrganizationInfo;
                voEntity.CorporationUnit = corporationUnit;

                // 构造Currency业务字段
                ICurrency currency = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.Currency.udt.Currency.Currency").CreateDataType() as ICurrency;
                BF.DF.Currency.udt.Currency.Currency.Entity.CurrencyInfo currencyInfo = new BF.DF.Currency.udt.Currency.Currency.Entity.CurrencyInfo();
                currencyInfo.Currency = item.Currency;
                IDFName currencyName = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.DFUdt.udt.DFName.DFName").CreateDataType() as IDFName;
                currencyName.DFName = item.CurrencyName;
                currencyInfo.Currency_Name = currencyName;
                currency.Currency = currencyInfo;
                voEntity.Currency = currency;

                // 构造Bank业务字段
                IBank bank = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.Bank.udt.Bank.Bank").CreateDataType() as IBank;
                BF.DF.Bank.udt.Bank.Bank.Entity.BankInfo bankInfo = new BF.DF.Bank.udt.Bank.Bank.Entity.BankInfo();
                bankInfo.Bank = item.Bank;
                IDFName bankName = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.DFUdt.udt.DFName.DFName").CreateDataType() as IDFName;
                bankName.DFName = item.BankName;
                bankInfo.Bank_Name = bankName;
                bank.Bank = bankInfo;
                voEntity.Bank = bank;

                // 构造AccountType业务字段
                IBankAccountType bankAccountType = ServiceManager.GetService<IUdtFactory>().CreateManager("Inspur.GS.BF.DF.BankAccountType.udt.BankAccountType.BankAccountType").CreateDataType() as IBankAccountType;
                BankAccountTypeInfo bankAccountTypeInfo = new BankAccountTypeInfo();
                bankAccountTypeInfo.BankAccountType = item.AccountType;
                bankAccountTypeInfo.BankAccountType_Name = item.AccountTypeName;
                bankAccountType.BankAccountType = bankAccountTypeInfo;
                voEntity.AccountType = bankAccountType;

                voDatas.Add(voEntity);
            }
            #endregion
            return voDatas;
        }
    }
}
