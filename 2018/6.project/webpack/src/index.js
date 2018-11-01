// import _ from 'lodash';
import './css/style.css';
import Icon from './img/love-bird.png';
import Data from './data/data.xml';
import printMe from './js/print.js';
import numRef from './data/ref.json';
// import { file, parse } from './global.js';
// import './data/tsconfig.json';
import HeaderTpl from './common/header.js';
import FooterTpl from './common/footer.js';
import {
	cube
} from './js/math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}
var root = document.getElementById("root");
var head = document.getElementById("header");
var foot = document.getElementById('footer');


function common() {
	const header = new HeaderTpl();
	var nodeHeader = header.tpl;

	head.innerHTML = nodeHeader;

	const footer = new FooterTpl();
	var nodeFooter = footer.tpl;
	console.log(nodeFooter);
	foot.innerHTML = nodeFooter;
}

export function numToWord(num) {
	return _.reduce(numRef, (accum, ref) => {
		return ref.num === num ? ref.word : accum;
	}, '');
};

export function wordToNum(word) {
	return _.reduce(numRef, (accum, ref) => {
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
	btn.onclick = printMe;
	root.appendChild(btn);
	//添加图片
	var myIcon = new Image();
	myIcon.src = Icon;
	root.appendChild(myIcon);

	// Note that because a network request is involved, some indication
	// of loading would need to be shown in a production-level site/app.
	button.onclick = e =>
		import ( /* webpackChunkName: "print" */ './js/print').then(module => {
			var print = module.default;
			print();
		});
	pre.innerHTML = [
		'Hello webpack! PRE',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');

	console.log(Data);

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

if (module.hot) {
	module.hot.accept('./js/print.js', function() {
		console.log('Accepting the updated printMe module!');
		// printMe();
		document.body.removeChild(element);
		element = component(); // 重新渲染页面后，component 更新 click 事件处理
		document.body.appendChild(element);
	})
}