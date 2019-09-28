// return idp.uiview.submit();
// 资金池-转账补录-提交复核-卡片
// 获取当前卡片
var current = idp.uiview.modelController.getMainRowObj();
if (!current.ID) {
	idp.error("当前没有数据");
	return false;
}
if(current.DOCSTATUS != 1 && current.DOCSTATUS != -3){
	idp.error("只有制单、复核退回的单据才能提交复核!");
	return false;
}
var id = current.ID;
var action = "submitrecheck";
var url = `/api/ihc/cps/entrustpayment/v1.0/entrustpayment/submitrecheck/${id}`;
idp.service.fetch(url, null, true, "PUT")
	.then(function(result) {
		if (result) {
			idp.tips("提交成功");
			$("#DOCSTATUS").val("待复核");
		}
	}, function(err) {
		idp.error(err.responseJSON.message);
	})
return true;


// 资金池-转账补录-提交复核-列表
// 获取当前行
var current = idp.control.get("grid_main").getSelected();
if (!current) {
	idp.error("请选择一条数据");
	return false;
}

if(current.DOCSTATUS != 1 && current.DOCSTATUS != -3){
	idp.error("只有制单、复核退回的单据才能提交复核!");
	return false;
}
var id = current.ID;
var action = "submitrecheck";
var url = `/api/ihc/cps/entrustpayment/v1.0/entrustpayment/submitrecheck/${id}`;
idp.service.fetch(url, null, true, "PUT")
	.then(function(result) {
			idp.tips("提交成功");
			idp.func.refresh();
		},
		function(err) {
			idp.error(err.responseJSON.message);
		}
	);

return true;

// 资金池-转账补录-删除校验-列表
var current = idp.control.get("grid_main").getSelected();
if (!current) {
	idp.error("请选择一条数据");
	return false;
}
if(current.DOCSTATUS != 1 && current.DOCSTATUS != -3){
	idp.error("只有制单、复核退回的单据才能删除!");
	return false;
}

idp.func.delete();
idp.func.refresh();

// var id = current.ID;
// var action = "deletevalid";
// var url = `/api/ich/cps/entrustpaymentsupply/v1.0/EPaySupply/${id}?action=${action}`;
// idp.service.fetch(url, null, true, "PUT")
// 	.then(function(result) {
// 		if (result) {
// 			idp.func.delete();
// 			idp.func.refresh();
// 		}
// 	}, function(err) {
// 		idp.error(err.responseJSON.message);
// 	})
// return true;

// 资金池-转账补录-删除校验-卡片
// return idp.uiview.deleteData();
// return true;


// 资金池-转账补录-删除校验-卡片
var current = idp.uiview.modelController.getMainRowObj();
if (!current.ID) {
	idp.error("当前没有数据");
	return false;
}

if(current.DOCSTATUS != 1 && current.DOCSTATUS != -3){
	idp.error("只有制单、复核退回的单据才能删除!");
	return false;
}

return idp.uiview.deleteData();
return true;

// var id = current.ID;
// var action = "deletevalid";
// var url = `/api/ihc/cps/entrustpayment/v1.0/entrustpayment/supplydeletevalid/${id}`;
// idp.service.fetch(url, null, true, "PUT")
// 	.then(function(result) {
// 		if (result) {
// 			return idp.uiview.deleteData();
// 		}
// 	}, function(err) {
// 		idp.error(err.responseJSON.message);
// 	})
// return true;

// 资金池-转账补录-保存校验-卡片
// return idp.uiview.saveData();


// 资金池-转账补录-保存校验-卡片
var current = idp.uiview.modelController.getMainRowObj();
if (!current.ID) {
	idp.error("当前没有数据");
	return false;
}
if(!amountValid()){
	idp.error("付款总金额与票据明细总金额不相等，请检查!");
	return false;
}

if(current.DOCSTATUS != 1 && current.DOCSTATUS != -3){
	idp.error("只有制单、复核退回的单据才能保存!");
	return false;
}

return idp.uiview.saveData();


function amountValid(){
	var amount = idp.uiview.modelController.getMainRowObj().PAYMENTAMOUNT;
	var listTotelAmout = 0;
	// 列表数据
	var billListRows = idp.uiview.gridController.grids.grid_IHCENTRUSTPAYMENTBILL.grid.rows;
	if(billListRows.length == 0){
		return true;
	}
	for(var i =0;i<billListRows.length;i++){
		listTotelAmout += billListRows[i].BILLAMOUNT;
	}
	if(amount == listTotelAmout){
		return true;
	}else{
		return false;
	}
}
// 超链跳转-查看
function(rowdata,column){
    var url = "/apps/fastdweb/views/runtime/page/card/cardpreview.html?dataid="+rowdata.ID+"&status=view&styleid=80ec6a4a-9144-611a-4d90-5e15ec547a96&&formState="
    idp.utils.openurl("","付款单卡片",url);
}
// 新增跳转
var url = "/apps/fastdweb/views/runtime/page/card/cardpreview.html?styleid=80ec6a4a-9144-611a-4d90-5e15ec547a96&dataid=&status=add&&formState=";
idp.utils.openurl("","付款补录详情",url);
// 列表按钮
//baritem_close  关闭
idp.func.close();
return true;
// baritem_cancelSubmit 撤回
return idp.func.cancelSubmit();
// baritem_image 电子影像
return idp.func.viewImage();
// baritem_export 导出
return idp.func.export();
// baritem_view 查看
idp.func.viewCard();
return true;
// 卡片按钮
// baritem_close 关闭 
return idp.uiview.close();
return true;

// var id = current.ID;
// var action = "savevalid";
// var url = `/api/ihc/cps/entrustpayment/v1.0/entrustpayment/supplysavevalid/${id}`;
// idp.service.fetch(url, null, true, "PUT")
// 	.then(function(result) {
// 		if (result) {
// 			return idp.uiview.saveData();
// 		}
// 	}, function(err) {
// 		idp.error(err.responseJSON.message);
// 	})




// let selected = idp.control.get("grid_main").selected;
// if (selected.length != 1) {
//     idp.error("请选择一条数据");
//     return false;
// }
// let id = selected[0].ID;
// let action = "InApproval";
// idp.service.fetch(`/api/ihc/cps/fundtransfer/v1.0/ihcfundtransfer/${id}?action=${action}`, null, true, "PUT")
//     .then(
//         () => {
//             idp.tips("提交成功");
//             idp.func.refresh();
//         },
//         result => {
//             idp.error(result.responseJSON.message);
//         }
//     );
// return true;