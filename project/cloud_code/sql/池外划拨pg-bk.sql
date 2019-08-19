SELECT bfbankaccounts.id as MasterAccountId ,bfbankaccounts.accountno,bfbankaccounts.accountname,bfbank.name_chs as Bank
                                ,bfoutpoolingallocationset.account,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.downtransferaccout else '0' end) as downtransferaccout,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.uptransferaccout else '0' end) as uptransferaccout,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.correspondvirtualacccount else '' end) as correspondvirtualacccount
	                            FROM bfbankaccounts
                                LEFT JOIN bfoutpoolingallocationset ON bfbankaccounts.id = bfoutpoolingallocationset.masteraccount
                                AND bfoutpoolingallocationset.account = @BankAccountId
                                INNER JOIN bfbank ON bfbankaccounts.bank = bfbank.id
                                LEFT JOIN (SELECT id,corporationunit,defaultcurrency,accountstatus,innerorouter FROM bfbankaccounts)
                                AS t ON (t.defaultcurrency=bfbankaccounts.defaultcurrency and t.accountstatus=bfbankaccounts.accountstatus and t.innerorouter=bfbankaccounts.innerorouter and bfbankaccounts.corporationunit in (WITH RECURSIVE r AS (
                                SELECT id,pnthrinfo_parentelement FROM bfmasterorganization WHERE id=t.corporationunit
                                UNION ALL SELECT t.id,t.pnthrinfo_parentelement FROM bfmasterorganization t,
                                r WHERE t.id=r.pnthrinfo_parentelement) SELECT id FROM r where id=bfbankaccounts.corporationunit))                               
                                WHERE t.id = @BankAccountId AND bfbankaccounts.id !=@BankAccountId

-- 池外划拨 pg

                                SELECT bfbankaccounts.id as MasterAccountId ,bfbankaccounts.accountno,bfbankaccounts.accountname,bfbank.name_chs as Bank
,bfoutpoolingallocationset.account,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.downtransferaccout else '0' end) as downtransferaccout,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.uptransferaccout else '0' end) as uptransferaccout,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.correspondvirtualacccount else '' end) as correspondvirtualacccount
FROM bfbankaccounts
LEFT JOIN bfoutpoolingallocationset ON bfbankaccounts.id = bfoutpoolingallocationset.masteraccount
AND bfoutpoolingallocationset.account = ''
INNER JOIN bfbank ON bfbankaccounts.bank = bfbank.id
LEFT JOIN (SELECT id,corporationunit,defaultcurrency,accountstatus,innerorouter FROM bfbankaccounts) t ON 
(t.defaultcurrency=bfbankaccounts.defaultcurrency and t.accountstatus=bfbankaccounts.accountstatus 
and t.innerorouter=bfbankaccounts.innerorouter 
and bfbankaccounts.corporationunit in 
( WITH RECURSIVE r(id,pnthrinfo_parentelement) as (
SELECT q.id,q.pnthrinfo_parentelement FROM bfmasterorganization q  -- WHERE id=t.corporationunit 
UNION ALL 
        SELECT m.id,m.pnthrinfo_parentelement FROM bfmasterorganization m,r WHERE m.id=r.pnthrinfo_parentelement
) SELECT id FROM r where id=bfbankaccounts.corporationunit))                               
WHERE t.id = '' AND bfbankaccounts.id !=''
-- pg 修改

SELECT bfbankaccounts.id as MasterAccountId ,bfbankaccounts.accountno,bfbankaccounts.accountname,bfbank.name_chs as Bank,bfoutpoolingallocationset.account,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.downtransferaccout else '0' end) as downtransferaccout,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.uptransferaccout else '0' end) as uptransferaccout,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.correspondvirtualacccount else '' end) as correspondvirtualacccount
                                 FROM bfbankaccounts
                                LEFT JOIN bfoutpoolingallocationset ON bfbankaccounts.id = bfoutpoolingallocationset.masteraccount
                                AND bfoutpoolingallocationset.account = ''
                                INNER JOIN bfbank ON bfbankaccounts.bank = bfbank.id
                                LEFT JOIN (SELECT id,corporationunit,defaultcurrency,accountstatus,innerorouter FROM bfbankaccounts)
                                AS t ON (t.defaultcurrency=bfbankaccounts.defaultcurrency and t.accountstatus=bfbankaccounts.accountstatus and t.innerorouter=bfbankaccounts.innerorouter and                                                           bfbankaccounts.corporationunit in
                                                                (WITH RECURSIVE el_0 AS 
                                                                (SELECT id,pnthrinfo_parentelement FROM bfmasterorganization WHERE id=''
                                UNION ALL 
                                                                SELECT el_1.id,el_1.pnthrinfo_parentelement FROM bfmasterorganization el_1,el_0 el_2 WHERE el_2.pnthrinfo_parentelement=el_1.id) 
                                                                SELECT id FROM el_0 ))                               
                                WHERE t.id = '' AND bfbankaccounts.id !=''

-- 池外划拨 oracla
                SELECT bfbankaccounts.id as MasterAccountId ,bfbankaccounts.accountno,bfbankaccounts.accountname,bfbank.name_chs as Bank
,bfoutpoolingallocationset.account,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.downtransferaccout else '0' end) as downtransferaccout,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.uptransferaccout else '0' end) as uptransferaccout,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.correspondvirtualacccount else '' end) as correspondvirtualacccount
FROM bfbankaccounts
LEFT JOIN bfoutpoolingallocationset ON bfbankaccounts.id = bfoutpoolingallocationset.masteraccount
AND bfoutpoolingallocationset.account = ''
INNER JOIN bfbank ON bfbankaccounts.bank = bfbank.id
LEFT JOIN (SELECT id,corporationunit,defaultcurrency,accountstatus,innerorouter FROM bfbankaccounts) t ON 
(t.defaultcurrency=bfbankaccounts.defaultcurrency and t.accountstatus=bfbankaccounts.accountstatus 
and t.innerorouter=bfbankaccounts.innerorouter 
and bfbankaccounts.corporationunit in 
( WITH el_0(id,pnthrinfo_parentelement) AS 
(SELECT id,pnthrinfo_parentelement FROM bfmasterorganization WHERE id=''
UNION ALL 
SELECT el_1.id,el_1.pnthrinfo_parentelement FROM bfmasterorganization el_1,el_0 el_2 WHERE el_2.pnthrinfo_parentelement=el_1.id) 
SELECT id FROM el_0))                               
WHERE t.id = '' AND bfbankaccounts.id !=''

-- 池外划拨原始

SELECT bfbankaccounts.id as MasterAccountId ,bfbankaccounts.accountno,bfbankaccounts.accountname,bfbank.name_chs as Bank
                                ,bfoutpoolingallocationset.account,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.downtransferaccout else '0' end) as downtransferaccout,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.uptransferaccout else '0' end) as uptransferaccout,
                                (case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.correspondvirtualacccount else '' end) as correspondvirtualacccount
                                    FROM bfbankaccounts
                                LEFT JOIN bfoutpoolingallocationset ON bfbankaccounts.id = bfoutpoolingallocationset.masteraccount
                                AND bfoutpoolingallocationset.account = @BankAccountId
                                INNER JOIN bfbank ON bfbankaccounts.bank = bfbank.id
                                LEFT JOIN (SELECT id,corporationunit,defaultcurrency,accountstatus,innerorouter FROM bfbankaccounts)
                                AS t ON (t.defaultcurrency=bfbankaccounts.defaultcurrency and t.accountstatus=bfbankaccounts.accountstatus and t.innerorouter=bfbankaccounts.innerorouter and bfbankaccounts.corporationunit in (WITH RECURSIVE r AS (
                                SELECT id,pnthrinfo_parentelement FROM bfmasterorganization WHERE id=t.corporationunit
                                UNION ALL SELECT t.id,t.pnthrinfo_parentelement FROM bfmasterorganization t,
                                r WHERE t.id=r.pnthrinfo_parentelement) SELECT id FROM r where id=bfbankaccounts.corporationunit))                               
                                WHERE t.id = @BankAccountId AND bfbankaccounts.id !=@BankAccountId

 -- DM
 SELECT bfbankaccounts.id as MasterAccountId ,bfbankaccounts.accountno,bfbankaccounts.accountname,bfbank.name_chs as Bank,bfoutpoolingallocationset.account,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.downtransferaccout else '0' end) as downtransferaccout,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.uptransferaccout else '0' end) as uptransferaccout,
(case t.id when bfoutpoolingallocationset.account then bfoutpoolingallocationset.correspondvirtualacccount else '' end) as correspondvirtualacccount
FROM bfbankaccounts
LEFT JOIN bfoutpoolingallocationset ON bfbankaccounts.id = bfoutpoolingallocationset.masteraccount
AND bfoutpoolingallocationset.account = ''
INNER JOIN bfbank ON bfbankaccounts.bank = bfbank.id
LEFT JOIN (SELECT id,corporationunit,defaultcurrency,accountstatus,innerorouter FROM bfbankaccounts) t ON 
(t.defaultcurrency=bfbankaccounts.defaultcurrency and t.accountstatus=bfbankaccounts.accountstatus 
and t.innerorouter=bfbankaccounts.innerorouter 
and bfbankaccounts.corporationunit in 
(select id from bfmasterorganization start with id='' connect by prior PNTHRINFO_PARENTELEMENT = id))                     
WHERE t.id = '' AND bfbankaccounts.id !=''
