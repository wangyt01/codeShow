-- 业务收款通知单
SELECT * FROM tmbizreceivingnotice;
-- 资金到账通知单
SELECT * FROM tmcapitalaccountnotice;
-- 认领结果
SELECT * FROM tmreceivingclaimresult;
-- 认领结果明细
SELECT * FROM tmreceivingclaimresultitem
-- 银行账户
SELECT * FROM bfbankaccounts;
-- 币种  
SELECT * FROM bfcurrency
-- 往来单位
SELECT * FROM bfpartner
-- 往来账户
SELECT * FROM bfpartnerbankaccounts
-- 结算方式
SELECT * FROM bfsettlementway
-- 无业务收款
SELECT * FROM tmbizreceivingsource;
-- 0 未启用 1 启用
SELECT * FROM tmbizreceivingsource WHERE isenable = '1';
-- 主组织
SELECT * FROM bfmasterorganization;
-- 行政组织
SELECT * FROM bfadminorganization;
-- 核算组织
SELECT * FROM bfaccountingorganization;
-- 直连余额银行
SELECT * FROM ebcbalanceonbank;
-- 查询方案
SELECT * FROM gspqdpschema;
-- 默认查询方案
SELECT * FROM gspqdpdefaultschema;
-- 用户
SELECT * FROM gspuser;
-- 数字签名映射表
SELECT * FROM gspauthenmapping;
-- 数字签名加签表
SELECT * FROM tmsettlementdocsignlog;





 
 