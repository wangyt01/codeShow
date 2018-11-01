(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/index.js!./src/css/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: 'MyFont';\r\n  src:  url(" + escape(__webpack_require__(/*! ../font/fontawesome-webfont.woff2 */ "./src/font/fontawesome-webfont.woff2")) + ") format('woff2'),\r\n        url(" + escape(__webpack_require__(/*! ../font/fontawesome-webfont.woff */ "./src/font/fontawesome-webfont.woff")) + ") format('woff');\r\n  font-weight: 900;\r\n  font-style: normal;\r\n}\r\n\r\n\r\n.root\r\n{\r\n    /* color: #ddd; */\r\n}\r\n\r\n.root-bg:nth-child(odd)\r\n{\r\n    background: #009688;\r\n}\r\n.root-bg:nth-child(even)\r\n{\r\n    background: #5fb878;\r\n}\r\n.hello\r\n{\r\n    color: red;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-family: 'MyFont';\r\n    background-image: url(" + escape(__webpack_require__(/*! ../img/love-bird.png */ "./src/img/love-bird.png")) + ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./src/common/footer.js":
/*!******************************!*\
  !*** ./src/common/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterTpl; });
/* harmony import */ var _footer_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.tpl */ "./src/common/footer.tpl");
/* harmony import */ var _footer_tpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_tpl__WEBPACK_IMPORTED_MODULE_0__);



function FooterTpl() {
	const data = {
		title: '我是底部1',
	}
	return {
		tpl: _footer_tpl__WEBPACK_IMPORTED_MODULE_0___default()(data)
	}
}

/***/ }),

/***/ "./src/common/footer.tpl":
/*!*******************************!*\
  !*** ./src/common/footer.tpl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div>' +
((__t = ( obj.title )) == null ? '' : __t) +
'</div>\r\n';

}
return __p
}

/***/ }),

/***/ "./src/common/header.js":
/*!******************************!*\
  !*** ./src/common/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderTpl; });
/* harmony import */ var _header_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.tpl */ "./src/common/header.tpl");
/* harmony import */ var _header_tpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_tpl__WEBPACK_IMPORTED_MODULE_0__);



function HeaderTpl() {
	const data = {
		title: '我是头部',
	}
	return {
		tpl: _header_tpl__WEBPACK_IMPORTED_MODULE_0___default()(data)
	}
}

/***/ }),

/***/ "./src/common/header.tpl":
/*!*******************************!*\
  !*** ./src/common/header.tpl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div>' +
((__t = ( obj.title )) == null ? '' : __t) +
'</div>\r\n';

}
return __p
}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/css/style.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/css/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/data/data.xml":
/*!***************************!*\
  !*** ./src/data/data.xml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/data/ref.json":
/*!***************************!*\
  !*** ./src/data/ref.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}];

/***/ }),

/***/ "./src/font/fontawesome-webfont.woff":
/*!*******************************************!*\
  !*** ./src/font/fontawesome-webfont.woff ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./font/fontawesome-webfont.woff";

/***/ }),

/***/ "./src/font/fontawesome-webfont.woff2":
/*!********************************************!*\
  !*** ./src/font/fontawesome-webfont.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./font/fontawesome-webfont.woff2";

/***/ }),

/***/ "./src/img/love-bird.png":
/*!*******************************!*\
  !*** ./src/img/love-bird.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./images/love-bird.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: numToWord, wordToNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(join) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numToWord", function() { return numToWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordToNum", function() { return wordToNum; });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_love_bird_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/love-bird.png */ "./src/img/love-bird.png");
/* harmony import */ var _img_love_bird_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_love_bird_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_data_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data.xml */ "./src/data/data.xml");
/* harmony import */ var _data_data_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_data_xml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/print.js */ "./src/js/print.js");
/* harmony import */ var _data_ref_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/ref.json */ "./src/data/ref.json");
var _data_ref_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/ref.json */ "./src/data/ref.json", 1);
/* harmony import */ var _common_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/header.js */ "./src/common/header.js");
/* harmony import */ var _common_footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/footer.js */ "./src/common/footer.js");
/* harmony import */ var _js_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/math.js */ "./src/js/math.js");
// import _ from 'lodash';





// import { file, parse } from './global.js';
// import './data/tsconfig.json';




if (false) {}
var root = document.getElementById("root");
var head = document.getElementById("header");
var foot = document.getElementById('footer');


function common() {
	const header = new _common_header_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
	var nodeHeader = header.tpl;

	head.innerHTML = nodeHeader;

	const footer = new _common_footer_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
	var nodeFooter = footer.tpl;
	console.log(nodeFooter);
	foot.innerHTML = nodeFooter;
}

function numToWord(num) {
	return _.reduce(_data_ref_json__WEBPACK_IMPORTED_MODULE_4__, (accum, ref) => {
		return ref.num === num ? ref.word : accum;
	}, '');
};

function wordToNum(word) {
	return _.reduce(_data_ref_json__WEBPACK_IMPORTED_MODULE_4__, (accum, ref) => {
		return ref.word === word && word.toLowerCase() ? ref.num : accum;
	}, -1);
}

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then(registration => {
			console.log('SW registered: ', registration);
		}).catch(registrationError => {
			console.log('SW registration failed: ', registrationError);
		});
	});
}

function component() {
	var root = document.getElementById('root');
	var element = document.createElement('div');
	var btn = document.createElement("button");
	var pre = document.createElement('pre');
	var br = document.createElement('br');
	var button = document.createElement("button");


	// Lodash, now imported by this script
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.innerHTML = join(['Hello', 'webpack'], ' ');


	//添加class
	element.classList.add('hello');

	root.appendChild(element);
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = _js_print_js__WEBPACK_IMPORTED_MODULE_3__["default"];
	root.appendChild(btn);
	//添加图片
	var myIcon = new Image();
	myIcon.src = _img_love_bird_png__WEBPACK_IMPORTED_MODULE_1___default.a;
	root.appendChild(myIcon);

	// Note that because a network request is involved, some indication
	// of loading would need to be shown in a production-level site/app.
	button.onclick = e =>
		Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./js/print */ "./src/js/print.js")).then(module => {
			var print = module.default;
			print();
		});
	pre.innerHTML = [
		'Hello webpack! PRE',
		'5 cubed is equal to ' + Object(_js_math_js__WEBPACK_IMPORTED_MODULE_7__["cube"])(5)
	].join('\n\n');

	console.log(_data_data_xml__WEBPACK_IMPORTED_MODULE_2___default.a);

	return element;
}
/**
 * * 循环显示
 */
function cycle() {
	var root = document.getElementById("root");

	var arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push("##" + i + "***");
	}
	root.innerHTML = _.join(arr, '<br> ');


	return root;
}

function creatDiv() {
	var root = document.getElementById("root");
	for (let i = 0; i < 10; i++) {
		var element = document.createElement('div');
		element.innerHTML = _.join([i], '<br> ');
		root.appendChild(element);
		element.classList.add("root-bg");
	}

	return element;
}


window.onload = function() {
	common();
	cycle();
	creatDiv();
}
// document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// root.appendChild(element);
// document.body.appendChild(creatDiv());

if (true) {
	module.hot.accept(/*! ./js/print.js */ "./src/js/print.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _js_print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/print.js */ "./src/js/print.js");
(function() {
		console.log('Accepting the updated printMe module!');
		// printMe();
		document.body.removeChild(element);
		element = component(); // 重新渲染页面后，component 更新 click 事件处理
		document.body.appendChild(element);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); })
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")["join"]))

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/*! exports provided: square, cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cube", function() { return cube; });
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export default function printMe() {
//   console.log('I get called from print.js!');
//   // cosnole.error('I get called from print.js!');
//   // console.log("test11f");
//   console.log('Updating print.js...11');
// }

console.log('The print.js module has loaded! See the network tab in dev tools...');

/* harmony default export */ __webpack_exports__["default"] = (() => {
  console.log('Button Clicked: Here\'s "some text"!');
});

/***/ })

},[["./src/index.js","../commons/manifest","vendors~another~index~vendor","vendors~index"]]]);
//# sourceMappingURL=index.bundle.js.map