-- 收款单位 
-- receivingunit
SELECT id,islegalperson,name_chs FROM bfmasterorganization;
-- receivingaccount
SELECT id,accountname,accountno,corporationunit FROM bfbankaccounts;
-- currency  
SELECT id,name_chs FROM bfcurrency;
-- 付款单位 payunit
SELECT id,name_chs FROM bfpartner;
-- payaccount
SELECT id,accountname_chs FROM bfpartnerbankaccounts;
-- settleway
SELECT id,name_chs FROM bfsettlementway;
-- 认领结果
SELECT * FROM tmreceivingclaimresult;
-- 认领结果明细
SELECT * FROM tmreceivingclaimresultitem;

SELECT receivingunit,receivingunitname,receivingaccount,receivingaccountname,receivingaccountno,currency,payunit,payunitname,payaccount,settleway FROM tmcapitalaccountnotice;

UPDATE tmcapitalaccountnotice SET receivingunit = '',receivingunitname = '',receivingaccount = '' ,receivingaccountname = '',receivingaccountno = '',currency = '' ,payunit = '',payunitname = '' ,payaccount = '' ,settleway = ''  WHERE id = ''

SELECT receivingunit,receivingunitname,receivingaccount,receivingaccountname,receivingaccountno,currency,payunit,payunitname,payaccount,settleway FROM tmcapitalaccountnotice;


UPDATE tmbizreceivingnotice SET receivingunit = '',receivingunitname = '',receivingaccount = '' ,receivingaccountname = '',receivingaccountno = '',currency = '' ,payunit = '',payunitname = '' ,payaccount = '' ,settleway = ''  WHERE id = ''


SELECT bfbankaccounts.corporationunit as receivingunit,bfmasterorganization.name_chs as receivingunitname,bfbankaccounts.id as receivingaccount,bfbankaccounts.accountname as receivingaccountname,bfbankaccounts.accountno as receivingaccountno,bfbankaccounts.defaultcurrency as currency
FROM bfbankaccounts 
LEFT JOIN bfmasterorganization ON bfbankaccounts.corporationunit = bfmasterorganization.id
WHERE bfbankaccounts.id = 'eb2e7d6f-e37f-4f88-afe6-1d2f4c3929d4'

UPDATE tmcapitalaccountnotice SET "alreadyclaimedamount" = 0.00000000, "availableclaimingamount" = 100000.00000000, "receivingamount" = 100000.00000000 WHERE id = '100';
UPDATE tmbizreceivingnotice SET "alreadyclaimedamount" = 0.00000000, "availableclaimingamount" = 120000.00000000, "receivingamount" = 120000.00000000 WHERE id = '100';


-- 业务收款通知单
SELECT * FROM tmbizreceivingnotice;
-- 资金到账通知单
SELECT * FROM tmcapitalaccountnotice;
-- 收款单位 
-- receivingunit
SELECT * FROM bfmasterorganization;
-- receivingaccount
SELECT * FROM bfbankaccounts;
-- currency  
SELECT * FROM bfcurrency;
-- 付款单位 payunit
SELECT * FROM bfpartner;
-- payaccount
SELECT * FROM bfpartnerbankaccounts;
-- settleway
SELECT * FROM bfsettlementway;
-- 认领结果
SELECT * FROM tmreceivingclaimresult;
-- 认领结果明细
SELECT * FROM tmreceivingclaimresultitem;

SELECT receivingunit,receivingaccount,currency,payunit,payaccount,settleway FROM tmcapitalaccountnotice;

SELECT receivingunit,receivingaccount,currency,payunit,payaccount,settleway FROM tmcapitalaccountnotice;

-- 无业务收款
SELECT * FROM tmbizreceivingsource;



-- 收款单位
INSERT INTO "bfmasterorganization"("id", "accountingorg", "adminorg", "attachment", "capitalgroup", "code", "financialshared", "head", "independent", "inventoryorg", "islegalperson", "name_chs", "name_cht", "name_en", "name_es", "name_pt", "orgtype", "ownerid", "pnthrinfo_isdetail", "pnthrinfo_layer", "pnthrinfo_parentelement", "pnthrinfo_sequence", "purchasingorg", "salesorg", "state_asyncdeletestatus", "state_disabletime", "state_isenabled", "summary", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "treeinfo_isdetail", "treeinfo_layer", "treeinfo_path") VALUES ('004', NULL, NULL, NULL, NULL, '004', NULL, NULL, NULL, NULL, '1', '人力资源部', NULL, NULL, NULL, NULL, '9edf25d1-b991-4dde-90b9-30145422d24d', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- 付款单位
INSERT INTO "bfpartner"("id", "area", "attachment", "billstatus", "code", "countryorregion", "defaultcurrencyid", "industry", "instanceid", "name_chs", "name_cht", "name_en", "name_es", "name_pt", "ofregion", "organizationcode", "remark", "representative", "state_asyncdeletestatus", "state_disabletime", "state_isenabled", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "type") VALUES ('4febefe1-01b5-4ed0-a63e-411c28bccad7', '', '{"AttachmentSize":0.0,"AttachmentPath":null,"AttachmentName":null}', NULL, '19023', '', '', '', NULL, '齐鲁医院', NULL, NULL, NULL, NULL, '', '', '', '', '0', NULL, '1', '田', '2019-03-12 19:48:52.081185', '田', '2019-03-12 19:48:52.081185', '');
-- 付款账号
INSERT INTO "bfpartnerbankaccounts"("id", "accountcode", "accountname_chs", "accountname_cht", "accountname_en", "accountname_es", "accountname_pt", "accountstate", "accounttype", "city", "country", "inbank", "ismain", "partnerid", "province", "remark", "state_asyncdeletestatus", "state_disabletime", "state_isenabled", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon") VALUES ('001', '001', '马化腾私户No.1', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- 结算方式
INSERT INTO "bfsettlementway"("id", "code", "name_chs", "name_cht", "name_en", "name_es", "name_pt", "remark", "settlementwaytype", "state_asyncdeletestatus", "state_disabletime", "state_isenabled", "syssign", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon") VALUES ('11c647a2-88bf-4ea2-9454-59262cebb90b', '001', '转账', NULL, NULL, NULL, NULL, '', '2f511c82-b187-4de3-9646-8cc9f117fa18', '0', NULL, '1', '0', '调试用户', '2019-03-06 17:21:11.501266', '调试用户', '2019-03-06 17:21:11.501266');
-- 银行账号
INSERT INTO "bfbankaccounts"("id", "accountname", "accountno", "accountproperty", "accountstatus", "accountunit", "accountingdepartment", "applicantid", "applicantname", "applicationdate", "balancedirection", "bank", "bankcancellationdate", "bankcanceller", "bankcontact", "bankcontactphonenumber", "bankincash", "banknameofchina", "banknoofchina", "city", "closeddate", "closeduserid", "closedusername", "corporationunit", "correspondingaccounttitle", "country", "createunit", "deadlinebymonth", "dealingcenter", "dealingnature", "defaultcurrency", "department", "disabledate", "disableuserid", "disableusername", "draftinterest", "draftlimitedamount", "duedate", "expendituredirection", "freezedstatus", "higheraccount", "ifcopybusinesslicense", "ifdefaultsettlement", "ifdraft", "ifincashaccount", "ifinterest", "iforganizationcode", "iforiginalbusinesslicense", "ifzerobalance", "incomeorexpense", "innerorouter", "interestrate", "note", "onlinebankinterface", "onlinebankopenstatus", "opendate", "openingexplain", "openingreason", "operator", "operatorphonenumber", "otherdata", "province", "relatedid", "shortname", "startdate", "startuserid", "startusername", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon", "totaldividetype", "unitaddress", "unitnature") VALUES ('96709d7c-a119-414f-9e05-4b76af2306f1', '浪潮集团户2', '932601920293039130', '', 2, '', '', 'ebb40e23-6125-45a5-bbcf-c3a7dd0c23af', '10086', '2019-06-21', 1, '3fe4d0fd-8ba7-4e34-8c96-dd27b8acfbe2', NULL, '', '', '', '', '', '', '', NULL, '', '', '000', '', '', '', 0, '', 1, '24d94537-fef9-4458-9872-426f070a4498', '', '2019-06-22', '3274a37e-30d3-4160-abc1-2157f984b914', 'wyt', 0.00000000, 0.00000000, NULL, 2, 1, '', '0', '0', '0', '0', '0', '0', '0', '0', 3, 2, '', '', '', 1, '2019-06-21', '', '', '', '', '', '', '', '浪潮集团户2', '2019-06-22', '3274a37e-30d3-4160-abc1-2157f984b914', 'wyt', '10086', '2019-06-21 11:44:37.456941', 'wyt', '2019-06-22 11:02:32.299758', 1, '', '');


-- 业务收款通知单

INSERT INTO "tmbizreceivingnotice"("id", "alreadyclaimedamount", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "expectreceivingdate", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "settleway", "srcdocid", "srcdocno", "summary", "timestamp_createdby", "timestamp_createdon", "timestamp_lastchangedby", "timestamp_lastchangedon") VALUES ('100', 0.00000000, 600.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', NULL, '1111111111', 11111, '2019-04-22', NULL, NULL, NULL, '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', NULL, 600.00000000, NULL, NULL, '004', '人力资源部', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '业务收款通知单', 'wyt', '2019-04-22 19:16:38', 'wyt', '2019-06-11 15:38:12.645767');

-- 资金到账通知单
INSERT INTO "tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('200', 0.00000000, '2019-06-25', 600.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', NULL, '1111111111', 1, NULL, NULL, NULL, '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '96709d7c-a119-414f-9e05-4b76af2306f1', '浪潮集团户2', '932601920293039130', 600.00000000, NULL, NULL, '004', '人力资源部', '222', '11c647a2-88bf-4ea2-9454-59262cebb90b', NULL, NULL, NULL, NULL, NULL, NULL, NULL);



INSERT INTO "cloud18"."tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('6', 0.00000000, '2019-04-26', 450.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', '', '001', 1, '', '', '0', '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', '2019010921120647', 450.00000000, '', '', '004', '人力资源部', '', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '摘要', 'pcw', '2019-03-09 09:41:28.838649', 'pcw', '2019-03-09 09:41:28.838649');

INSERT INTO "cloud18"."tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('7', 0.00000000, '2019-04-26', 450.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', '', '001', 1, '', '', '0', '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', '2019010921120647', 450.00000000, '', '', '004', '人力资源部', '', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '摘要', 'pcw', '2019-03-09 09:41:28.838649', 'pcw', '2019-03-09 09:41:28.838649');

INSERT INTO "cloud18"."tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('8', 0.00000000, '2019-04-26', 450.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', '', '001', 1, '', '', '0', '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', '2019010921120647', 450.00000000, '', '', '004', '人力资源部', '', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '摘要', 'pcw', '2019-03-09 09:41:28.838649', 'pcw', '2019-03-09 09:41:28.838649');

INSERT INTO "cloud18"."tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('9', 0.00000000, '2019-04-26', 450.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', '', '001', 1, '', '', '0', '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', '2019010921120647', 450.00000000, '', '', '004', '人力资源部', '', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '摘要', 'pcw', '2019-03-09 09:41:28.838649', 'pcw', '2019-03-09 09:41:28.838649');


INSERT INTO "cloud18"."tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('10', 0.00000000, '2019-04-26', 450.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', '', '001', 1, '', '', '0', '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', '2019010921120647', 450.00000000, '', '', '004', '人力资源部', '', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '摘要', 'pcw', '2019-03-09 09:41:28.838649', 'pcw', '2019-03-09 09:41:28.838649');

INSERT INTO "cloud18"."tmcapitalaccountnotice"("id", "alreadyclaimedamount", "arrivaldate", "availableclaimingamount", "claimstatus", "currency", "description", "docno", "docsrc", "internalaccount", "internalaccountno", "isvouchergenerated", "payaccount", "payaccountname", "payaccountno", "payunit", "payunitname", "receivingaccount", "receivingaccountname", "receivingaccountno", "receivingamount", "receivingdept", "receivingdeptname", "receivingunit", "receivingunitname", "receivingvirtualsubaccount", "settleway", "srcdocid", "srcdocno", "summary", "timestamps_createdby", "timestamps_createdon", "timestamps_lastchangedby", "timestamps_lastchangedon") VALUES ('11', 0.00000000, '2019-04-26', 450.00000000, 1, '24d94537-fef9-4458-9872-426f070a4498', '', '001', 1, '', '', '0', '', '', '', '4febefe1-01b5-4ed0-a63e-411c28bccad7', '齐鲁医院', '1', '北京银行账户1', '2019010921120647', 450.00000000, '', '', '004', '人力资源部', '', '11c647a2-88bf-4ea2-9454-59262cebb90b', '11', '12312', '摘要', 'pcw', '2019-03-09 09:41:28.838649', 'pcw', '2019-03-09 09:41:28.838649');





