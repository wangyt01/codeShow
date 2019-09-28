SELECT * FROM gspbusinessobject


SELECT * FROM bfmasterorganization


SELECT * FROM gspbusinessobject

SELECT * FROM gspfunc

SELECT * FROM gspdatabaseobject
-- 租户信息
SELECT * FROM ecpsudbmapping




SELECT * FROM tmparametersetting

-- 法人组织

SELECT * FROM tmcapitalaccountnotice;


--组织机构
SELECT * FROM bfmasterorganization;
-- 组织机构类型
SELECT * FROM bfmasterorganizationtype

SELECT * FROM bfbankaccounts

SELECT * FROM bfbank

SELECT * FROM bfcurrency

SELECT * FROM bfout

-- 资金到账通知单
SELECT * FROM tmcapitalaccountnotice




SELECT * FROM bfbankaccounts WHERE accountstatus
-- 法人单位 corporationunit
-- 默认币种 defaultcurrency
-- 生效状态 accountstatus
-- 账户种类 innerorouter


SELECT * FROM bfadminorganization

SELECT * FROM bfbank
-- 银行账户排序
SELECT bfbankaccounts.id,bfbankaccounts.accountstatus,bfbankaccounts.corporationunit,bfmasterorganization.name_chs,innerorouter,bfbankaccounts.bank,bfbank.name_chs,bfbankaccounts.accountno FROM bfbankaccounts 
LEFT JOIN bfmasterorganization ON bfmasterorganization.id = bfbankaccounts.corporationunit AND bfmasterorganization.islegalperson = '0'
LEFT JOIN bfbank ON bfbank.id = bfbankaccounts.bank
WHERE bfbankaccounts.accountstatus = 2 OR bfbankaccounts.accountstatus = 1 
ORDER BY accountstatus,innerorouter,bfmasterorganization.name_chs,bfbank.name_chs,accountno;


BF_BANKACCOUNTCARD

INSERT INTO "gspbusinessobject"("id", "code", "description", "isdetail", "layer", "name", "parentid", "sortorder", "sysinit", "type") VALUES ('outpoolingallocationset', 'OutPoolingAllocationSet', '', '1', 4, '银行账户池外划拨设置', 'df', 1, '0', 1);

INSERT INTO "bfoutpoolingallocationset" ("id", "account", "correspondvirtualacccount", "downtransferaccout", "masteraccount", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "uptransferaccout") VALUES ('111', '671ff71f-b0fb-49b1-9831-9a999b33fbf4', '1', '1', '19187613-fa51-4054-aa53-ecb5c29f0113', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "bfoutpoolingallocationset" ("id", "account", "correspondvirtualacccount", "downtransferaccout", "masteraccount", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "uptransferaccout") VALUES ('222', '671ff71f-b0fb-49b1-9831-9a999b33fbf4', '1', '1', '216d2974-b20b-4568-ae69-df9289d46866', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "bfoutpoolingallocationset" ("id", "account", "correspondvirtualacccount", "downtransferaccout", "masteraccount", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "uptransferaccout") VALUES ('333', '671ff71f-b0fb-49b1-9831-9a999b33fbf4', '1', '1', '252a8bbb-9007-4fa5-a214-95bcdd972494', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "bfoutpoolingallocationset" ("id", "account", "correspondvirtualacccount", "downtransferaccout", "masteraccount", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "uptransferaccout") VALUES ('444', '671ff71f-b0fb-49b1-9831-9a999b33fbf4', '1', '1', 'ad9f8e58-8de2-4e02-9598-76ab7908ae09', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "bfoutpoolingallocationset" ("id", "account", "correspondvirtualacccount", "downtransferaccout", "masteraccount", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "uptransferaccout") VALUES ('555', '671ff71f-b0fb-49b1-9831-9a999b33fbf4', '1', '1', '03d3d57d-855a-4c75-aa39-5a6a20ad612c', NULL, NULL, NULL, NULL, NULL);





INSERT INTO "cloud17"."bfbankaccountauthorized" ("id", "authorizedunit", "operatedate", "operatorid", "operatorname", "parentid", "startedstatus", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon") VALUES ('e89f9ead-5432-4a0c-9bd2-213cde8bb425', '333', '2019-06-06', 'admin', '系统管理员', '18f42bad-f9e7-4f9d-aea1-f954cbf7ff2d', '1', '系统管理员', '2019-06-06 13:58:51.577033', '系统管理员', '2019-06-06 13:58:51.577033');
INSERT INTO "cloud17"."bfbankaccountauthorized" ("id", "authorizedunit", "operatedate", "operatorid", "operatorname", "parentid", "startedstatus", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon") VALUES ('729babaa-0c51-41ec-9a92-89c7918e89d2', 'id111', '2019-06-05', 'ec19f8fc-05f6-4cf5-8403-4715b2b12ece', 'wyt', '0fc1ac28-5982-4395-9546-cccf863eec43', '2', 'wyt', '2019-06-05 09:33:51.072717', 'wyt', '2019-06-05 09:33:51.072717');
INSERT INTO "cloud17"."bfbankaccountauthorized" ("id", "authorizedunit", "operatedate", "operatorid", "operatorname", "parentid", "startedstatus", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon") VALUES ('id222', '333', '2019-06-06', 'admin', 'wyt', '0fc1ac28-5982-4395-9546-cccf863eec43', '2', NULL, NULL, NULL, NULL);


--授权sql查询

SELECT bfbankaccountauthorized.id,bfmasterorganization.name_chs as UnitName,bfbankaccountauthorized.startedstatus,bfmasterorganization.id as MasterOrgID 
                                FROM bfbankaccountauthorized
			                    LEFT JOIN bfmasterorganization ON bfmasterorganization.id = bfbankaccountauthorized.authorizedunit
                                WHERE bfbankaccountauthorized.parentid = @BankAccountId
