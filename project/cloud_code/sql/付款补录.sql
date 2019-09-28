- 管理组织 treasureorg
-- 管理模式 managementpattern 3 统收统支
-- 
SELECT treasureorg,managementpattern,higheraccountoutgoing FROM bftreasurepooling WHERE managementpattern = 3 and treasureorg = 'eb814de7-9431-b78c-f937-14fedbcb4646';

SELECT bftreasurepooling.id,bftreasurepooling.higheraccountoutgoing FROM 
	bftreasurepooling
	 LEFT JOIN bfbankaccounts ON bftreasurepooling.higheraccountoutgoing = bfbankaccounts.id 
 WHERE 
	bftreasurepooling.managementpattern = 3 AND bfbankaccounts.onlinebankopenstatus !=3
	AND bftreasurepooling.treasureorg = 'eb814de7-9431-b78c-f937-14fedbcb4646' 
	

SELECT unitid FROM bftreasurepoolingaccount WHERE poolingid in (SELECT bftreasurepooling.id FROM 
	bftreasurepooling
	 LEFT JOIN bfbankaccounts ON bftreasurepooling.higheraccountoutgoing = bfbankaccounts.id 
 WHERE 
	bftreasurepooling.managementpattern = 3 AND bfbankaccounts.onlinebankopenstatus !=3
	AND bftreasurepooling.treasureorg = '{Data:IHCENTRUSTPAYMENT.TREASUREOGRID}' ) ;
	
	
	SELECT correspondvirtualacccount FROM bftreasurepoolingaccount WHERE unitid in(
		SELECT unitid FROM bftreasurepoolingaccount WHERE poolingid in (SELECT bftreasurepooling.id FROM 
	bftreasurepooling
	 LEFT JOIN bfbankaccounts ON bftreasurepooling.higheraccountoutgoing = bfbankaccounts.id 
 WHERE 
	bftreasurepooling.managementpattern = 3 AND bfbankaccounts.onlinebankopenstatus !=3
	AND bftreasurepooling.treasureorg = '{Data:IHCENTRUSTPAYMENT.TREASUREOGRID}' )
)

	
	-- 资金组织
SELECT * FROM bftreasureorg WHERE id = 'eb814de7-9431-b78c-f937-14fedbcb4646';