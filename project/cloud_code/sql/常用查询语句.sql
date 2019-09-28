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
-- 资金池付款
SELECT * FROM ihcentrustpayment;
-- 资金池付款单据明细
SELECT * FROM ihcentrustpaymentbill;
-- 主组织
SELECT * FROM bfmasterorganization;
-- 行政组织
SELECT * FROM bfadminorganization;
-- 核算组织
SELECT * FROM bfaccountingorganization;
-- 资金组织
SELECT * FROM bftreasureorg;
-- 上存款变动通知单
SELECT * FROM tmdepositchangenotice;
-- IDP编码规则
SELECT * from idpcodeset;
-- IDP
SELECT * from idpdirmeta;
-- 银行账户余额表
SELECT * FROM tmbalanceofba;
-- 内部账户余额表
SELECT * FROM ihcinneraccountbalance;


--业务对象表
select * from Gspbusinessobject;

--功能操作表
select * from gspoperation;



--数据操作操作表（公共表，不需要产品部单独预置）
select * from gspauthoperation;

--权限对象、及权限对象与数据操作、权限字段关系表
select * from gspauthorization;
select * from gspauthorizationop;
select * from gspauthentry;
select * from gspauthpermission;

--权限字段、权限字段维度设置表
select * from gspauthfield;
select * from gspauthfieldgroup;

--逻辑分区对应的表，
select * from gspAuthlogicObj;


--权限扩展表，主要用于BE，如果不使用BE，可以不导出。
select * from gspsecurityentry;
select * from gspoperationentry;
select * from gspauthfieldentry;
select * from gspauthoperationentry;







 
 