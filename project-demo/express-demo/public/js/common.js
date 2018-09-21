// var chatIp='192.168.1.110';//设置聊天iP;
// avalon.filters.scorePass = function(str){	
// 	var pass = parseFloat(str);
// 	if(pass >=0){
// 		return "通过";
// 	}
// 	else{
// 		return "不通过";
// 	}
// }  
// avalon.filters.n2br = function(str){	
// 	 if(str){
// 		 str = str.replace(/\n/g,"</p><p  class='info space'>");
// 		 str="<p class='info space'>"+str+"</p>";
// 	 }
// 	 return str;
// }  
/**
 * 字符串转化为Date对象
 * @param str
 * @returns {Date}
 */
function sys_string2data(str) {
	return new Date(Date.parse(str.replace(/-/g, "/")))
}
//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

//   var sys_global = avalon.define("controller",function(vm){
//   	vm.user={}; 
//   	vm.menuId="teacher";	    	   
//   	vm.topShow = true;
//   	vm.iframSrc="";  	
//   	vm.mask=false;

// }); 

function sys_menu_go(id, url) {
	sys_global.menuId = id;
	sys_global.iframSrc = url;
}
var _show_dlg = [];
$(function() {
	var us = window.sessionStorage.getItem("user");
	if (us) {
		sys_global.user = JSON.parse(us);
	}
	if (window.location.href != top.location.href) {
		$("[role='dialog']").on("show.bs.modal", function() {
			var id = $(this).attr("id");
			if (_show_dlg == 0) {
				sys_show_mask();
			}
			avalon.Array.ensure(_show_dlg, id);
		});
		$("[role='dialog']").on("hide.bs.modal", function() {
			var id = $(this).attr("id");
			avalon.Array.remove(_show_dlg, id);
			if (_show_dlg == 0) {
				sys_hide_mask();
			}
		});
	}

});


/**
 * 对ajax请求的封装
 * @param url
 * @param param
 * @param sucess
 * @param fail
 */
function autoAjax(url, param, sucess, fail) {
	var jqxhr = $.post(ctx + url, param, function(data, textStatus, jqXHR) {
		if (data && data.needLogin) { //超时
			var loginUrl = "";
			if (typeof(login_url) == "undefined") {
				var lurl = window.sessionStorage.getItem("login_url")
				if (lurl) {
					loginUrl = lurl;
				} else {
					loginUrl = ctx + "/jsp/login.jsp";
				}
			} else {
				loginUrl = login_url;
			}
			top.location.href = loginUrl;
			return;
		}
		if (sucess) {
			sucess(data);
		}

	// }, "json");
	});


}


/**
 ** 原生JS实现ajax 
 **
 **
 */

function ajaxjs(url, fnSucc, fnFaild) {
	//1【创建】
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		var oAjax = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	};

	//2: 【连接】true:表示异步
	oAjax.open('GET', url, true);

	//3：【发送】
	oAjax.send();

	//4：【接受】
	oAjax.onreadystatechange = function() {

		//判断浏览器操作到哪一步
		if (oAjax.readyState == 4) { //4：读取完成
			if (oAjax.status == 200) {
				fnSucc(JSON.parse(oAjax.responseText));
			} else {
				if (fnFaild) {
					fnFaild(oAjax.status);
				}
			}

		}
	}
}

/**例子**/
   // window.onload = function() {
              
   //              ajaxjs('index.json', function(str) {
   //                  var str = str;
   //                  // var oJson = (new Function('return (' + str + ')'))();
   //                  // var a = oJson['tab'];
   //                  // var obj = JSON.parse(str)
   //                  // console.log(obj.tab[1])
   //                  console.log(str)
   //              })
   //          }

/**
 * 退出系统
 */

function sys_exit() {

	autoAjax("/base/user/logout", "", function(json) {
		if (json.result == true) {
			var loginUrl = "";
			if (typeof(login_url) == "undefined") {
				var lurl = window.sessionStorage.getItem("login_url")

				if (lurl) {
					loginUrl = lurl;
				} else {
					loginUrl = ctx + "/jsp/nursing/index.jsp";
				}

			} else {
				loginUrl = login_url;
			}
			top.location.href = loginUrl;
		}

	});
}

function sys_show_mask() {
	if (top.sys_global) {
		top.sys_global.mask = true;
	}
	if (parent && parent.dbBase) {
		parent.dbBase.mask = true;
	}
}

function sys_hide_mask() {
	if (top.sys_global) {
		top.sys_global.mask = false;
	}
	if (parent && parent.dbBase) {
		parent.dbBase.mask = false;
	}
}
var sys_popover_option = {
	delay: 500,
	html: true,
	content: ''
};

function sys_show_eorr(obj, content) {
	sys_popover_option.content = content;
	obj.popover(sys_popover_option).popover("show");
}


function sys_prePage(url, grid, joinpage) {
	if (!url || !grid || !grid.data || !grid.page) {
		return;
	}
	var page = grid.page;
	if (page.pageNumber == 1) {
		sys_alert("已到第一页");
		return;
	}
	var param = "";
	if ($(".f-query").length > 0) {
		param = $(".f-query").serialize();
	}
	param = param + "&pageNumber=" + (page.pageNumber - 1) + "&pageSize=" + page.pageSize;
	autoAjax(url, param, function(data) {
		if (data.data) {
			grid.data = data.data;
			grid.page = data.page;
		}
		if (joinpage && typeof joinpage == 'function') {
			joinpage(data);
		}
	});
}

function sys_nextPage(url, grid, joinpage) {
	if (!url || !grid || !grid.data || !grid.page) {
		return;
	}
	var page = grid.page;
	if (page.pageCount == 0) {
		sys_alert("已到最后一页");
		return;
	}
	if (page.pageNumber >= page.pageCount) {
		sys_alert("已到最后一页");
		return;
	}
	var param = "";
	if ($(".f-query").length > 0) {
		param = $(".f-query").serialize();
	}
	param = param + "&pageNumber=" + (page.pageNumber + 1) + "&pageSize=" + page.pageSize;
	autoAjax(url, param, function(data) {
		if (data.data) {
			grid.data = data.data;
			grid.page = data.page;
		}
		if (joinpage && typeof joinpage == 'function') {
			joinpage(data);
		}
	});
}

function sys_disable_upload(file_ctrl_id) {
	$('#' + file_ctrl_id).uploadify('disable', true);
}

function sys_enable_upload(file_ctrl_id) {
	$('#' + file_ctrl_id).uploadify('disable', false);
}
//上传
function sys_upload_init(option) {
	if (!option || !option['file_ctrl_id']) {
		alert("参数错误");
		return;
	}
	option['fileObjName'] = option['fileObjName'] || 'sys_file';
	option['swf'] = option['swf'] || ctx + '/plug-in/uploadify/uploadify.swf';
	option['uploader'] = option['uploader'] || ctx + '/base/attach/upload';
	option['buttonText'] = option['buttonText'] || '上传文件';
	option['file_store_location'] = option['file_store_location'] || 'db';
	if (option['toswf'] && option['toswf'] == 1) {
		option['uploader'] = option['uploader'] + "?toswf=1";
	}

	var fun = option['onUploadSuccess'];
	option['onUploadSuccess'] = function(file, data, response) {
		var json = JSON.parse(data);
		$("#" + option['bs_id_ctrl_id']).val(json.bs_id);
		if (fun && typeof fun == "function") {
			fun(file, json, response);
		}
	};
	option['onDialogOpen'] = function() {
		var formData = option['formData'];
		if (!formData) {
			formData = {};
		}
		formData['_sys_bs_id'] = $("#" + option['bs_id_ctrl_id']).val();
		if (option['multi'] == false) {
			formData['_multi'] = false;
		}
		formData['file_store_location'] = option['file_store_location'];
		if (option['dirName']) {
			formData['dirName'] = option['dirName'];
		}
		if (option['sysCode']) {
			formData['sysCode'] = option['sysCode'];
		}
		$('#' + option['file_ctrl_id']).uploadify('settings', 'formData', formData);
	};
	$('#' + option['file_ctrl_id']).uploadify(option);
}

function sys_del_attach(id, fun) {
	autoAjax("/base/attach/del", {
		id: id
	}, function(data) {
		if (fun && typeof fun == 'function') {
			fun(data);
		}
	});
}



var validRules = {

};

function validationForm(frmSelector) {
	/*var ctrs =  $(frmSelector).find('input, textarea,select');	 
	for(var i=0;i<ctrs.length;i++){
		alert(ctr.attr('name')+" "+i);
	}*/
}
//tr拖动
function trmove(tableid) {
	$("#" + tableid + " tbody").sortable();
	$("#" + tableid + " tbody").disableSelection();
}
//初始化table  tr的id
function oldnum(tableid) {
	var trList = $("#" + tableid + " tbody").children("tr");
	var num = {};
	for (var i = 0; i < trList.length; i++) {
		var trid = trList.eq(i).attr("id");
		num[i + 1] = trid;
	}
	window.sessionStorage.setItem("oldnums", JSON.stringify(num));
}
//列表排序
function savenum(dbtable, tableid) {
	var oldnums = window.sessionStorage.getItem("oldnums");
	var trList = $("#" + tableid + " tbody").children("tr");
	var num = {};
	for (var i = 0; i < trList.length; i++) {
		var trid = trList.eq(i).attr("id");
		num[i + 1] = trid;
	}
	var newnums = JSON.stringify(num);
	if (oldnums == newnums) {
		sys_alert("请重新排序后再点击保存！");
	} else {
		autoAjax("/base/public/repeatsort", {
			newnums: newnums,
			dbtable: dbtable
		}, function(json) {
			if (json.result == true) {
				sys_alert(json.msg);
			}
		});
	}
};
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
	17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27,
	28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
	45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
/**
 * base64编码
 * @param str
 * @returns
 */
function base64encode(str) {
	var out, i, len;
	var c1, c2, c3;
	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt((c1 & 0x3) << 4);
			out += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt((c2 & 0xF) << 2);
			out += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		out += base64EncodeChars.charAt(c1 >> 2);
		out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		out += base64EncodeChars.charAt(c3 & 0x3F);
	}
	return out;
}
/** 
 * base64解码 
 * @param {Object} str 
 */
function base64decode(str) {
	var c1, c2, c3, c4;
	var i, len, out;
	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		/* c1 */
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		}
		while (i < len && c1 == -1);
		if (c1 == -1)
			break;
		/* c2 */
		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		}
		while (i < len && c2 == -1);
		if (c2 == -1)
			break;
		out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
		/* c3 */
		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return out;
			c3 = base64DecodeChars[c3];
		}
		while (i < len && c3 == -1);
		if (c3 == -1)
			break;
		out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
		/* c4 */
		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61)
				return out;
			c4 = base64DecodeChars[c4];
		}
		while (i < len && c4 == -1);
		if (c4 == -1)
			break;
		out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
	}
	return out;
}


/************************************************************************************************************************************/
//上传
function sys_upload_init1(option) {
	console.dir(option)
	if (!option || !option['file_ctrl_id']) {
		alert("参数错误");
		return;
	}
	option['fileObjName'] = option['fileObjName'] || 'sys_file';
	option['swf'] = option['swf'] || ctx + '/plug-in/uploadify/uploadify.swf';
	option['uploader'] = option['uploader'] || ctx + '/base/attach/upload';
	option['buttonText'] = option['buttonText'] || '上传文件';
	option['file_store_location'] = option['file_store_location'] || 'db';
	if (option['toswf'] && option['toswf'] == 1) {
		option['uploader'] = option['uploader'] + "?toswf=1";
	}

	var fun = option['onUploadSuccess'];
	option['onUploadSuccess'] = function(file, data, response) {
		var json = JSON.parse(data);
		$("#" + option['bs_id_ctrl_id']).val(json.bs_id);
		if (fun && typeof fun == "function") {
			fun(file, json, response);
		}
	};

	option['onDialogOpen'] = function() {
		var formData = option['formData'];
		if (!formData) {
			formData = {};
		}
		formData['_sys_bs_id'] = $("#" + option['bs_id_ctrl_id']).val();
		if (option['multi'] == false) {
			formData['_multi'] = false;
		}
		formData['file_store_location'] = option['file_store_location'];
		if (option['dirName']) {
			var pathNum = option['dirName'].split("/");
			pathNum[2] = MathRands();
			option['dirName'] = pathNum[0] + "/" + pathNum[1] + "/" + pathNum[2];
			option['dirName'] = option['dirName'];
			formData['dirName'] = option['dirName'];
		}
		if (option['sysCode']) {
			formData['sysCode'] = option['sysCode'];
		}
		$('#' + option['file_ctrl_id']).uploadify('settings', 'formData', formData);
	};
	$('#' + option['file_ctrl_id']).uploadify(option);
}

function MathRands() {
	var Num = "";
	for (var i = 0; i < 11; i++) {
		Num += Math.floor(Math.random() * 10);
	}
	return Num;
}
/*
	可使用的校验类型：
	    required:"必填",
		email: "请输入有效的电子邮件地址",
		url: "请输入有效的网址",
		number: "请输入有效的数值",//可输入负数和小数
		int:"请输入正整数",
		maxlength: "最多可以输入 {0} 个字符",
		minlength:"最少要输入 {0} 个字符",
		max: "请输入小于等于 {0} 的数值",
		min:"请输入大于 {0} 的数值"
		
	使用方法：
		1.在提交的方法中写  
		var cus_msg =custom_validate("#f-detail");
    	if(!cus_msg){
    		return false;
    	};
		2.在元素中添加属性class="cus-validate" 和 validate-rule='',
		例如：validate-rule='{"required":"请输入内容！","email":"请输入有效的电子邮件","maxlength":"2","max":"4"}'
		3.特殊情况下：
		如单选按钮和复选框：
		在多个input元素的其中一个上添加class="cus-validate" 和 validate-rule=''即可
	 */
//自定义校验
function custom_validate(formId) {
	var ret_val = true;
	$(formId).find(".cus-validate").each(function() {
		//校验信息
		var $cs = $(this);
		var msg = $cs.attr("validate-rule");
		var objMsg = JSON.parse(msg.toLowerCase());
		var se_type = $cs.attr("type");
		var value = $cs.val();
		if (se_type != 'password' && value != null) { //type为密码时不能过滤空字符
			value = $cs.val().trim();
		}

		if (se_type == 'radio' || se_type == 'checkbox') { //单选框
			value = "";
			var se_name = $cs.attr("name"); //元素的name属性

			//单选框
			if (se_type == 'radio') {
				value = $("input[name='" + se_name + "']:checked").val();
			} else if (se_type == 'checkbox') { //复选框
				var chk_value = []; //选中的复选框的值
				$("input[name='" + se_name + "']:checked").each(function() {
					chk_value.push($(this).val());
				});
				value = chk_value.join(',');
			}
		}
		if (value == undefined) {
			value = '';
		}
		for (var key in objMsg) {
			if (value == '' || value == null) {
				//必填
				if (key == 'required') {
					sys_alert(objMsg['required'], function() {
						$cs.focus();
					});
					ret_val = false;
					return false;
				}
			} else {
				var str_msg = '';

				switch (key) {

					case "email":
						ret_val = emailCheck(value);
						break;
					case "url":
						ret_val = CheckUrl(value);
						break;
					case "number":
						ret_val = !isNaN(value);
						break;
					case "int":
						ret_val = CheckInt(value);
						break;
					case "maxlength":
						if (value.length > objMsg['maxlength']) {
							str_msg = "最多可输入" + objMsg['maxlength'] + "个字符";
							ret_val = false;
						}
						break;
					case "minlength":
						if (value.length < objMsg['minlength']) {
							str_msg = "至少输入" + objMsg['minlength'] + "个字符";
							ret_val = false;
						}
						break;
					case "max":
						if (value > objMsg['max']) {
							str_msg = "请输入小于等于" + objMsg['max'] + "的数值";
							ret_val = false;
						}
						break;
					case "min":
						if (value > objMsg['min']) {
							str_msg = "请输入大于" + objMsg['min'] + "的数值";
							ret_val = false;
						}
						break;
				}
				if (!ret_val) {
					if (str_msg == '') {
						str_msg = objMsg[key];
					}
					sys_alert(str_msg, function() {
						$cs.focus();
					});
					ret_val = false;
					return false;
				}

			}
		}
	});
	return ret_val;
}
//判断是否是有效的email地址
function emailCheck(emailAddr) {
	if ((emailAddr == null) || (emailAddr.length < 2)) return false;

	// 需出现'@',且不在首字符.
	var aPos = emailAddr.indexOf("@", 1);

	if (aPos < 0) {
		return false;
	}

	// '@'后出现'.',且不紧跟其后.
	if (emailAddr.indexOf(".", aPos + 2) < 0) {
		return false;
	}

	return true;
}
//判断是否为url
function CheckUrl(str) {
	var RegUrl = new RegExp();
	RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
	if (!RegUrl.test(str)) {
		return false;
	}
	return true;
}
//判断是为否为正整数
function CheckInt(val) {
	var re = /^[0-9]*[1-9][0-9]*$/;
	return re.test(val);
}
//过滤文本中的html标签
function removeHTMLTag(str) {
	str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
	str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
	str = str.replace(/ /ig, ''); //去掉 
	return str;
}
//批量选择
var delids = [];

function selectAll(ts) {
	if (ts.checked) {

		$("[name = selbox]:checkbox").attr("checked", true);
		$("input[name='selbox']:checked").each(function() {
			delids.push($(this).val());
		});
		//把所有的checkbox全选
	} else {

		delids = [];
		$("[name = selbox]:checkbox").attr("checked", false);
		//把所有的checkbox取消全选
	}
}

function selectAll() {
	var sel = $("#sel")[0];
	var ids = document.getElementsByName("selbox");
	for (var i = 0; i < ids.length; i++) {
		if (sel.checked) {
			ids[i].checked = true;
		} else {
			ids[i].checked = false;
		}
	}
};