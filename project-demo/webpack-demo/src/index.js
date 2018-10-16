import _ from 'lodash';
import './reset.css';
import './style.css';
import webImg from './images/web-img.jpg';
import Data from './data/data.xml';
import printMe from './js/print.js';
import hotMe from './js/hot.js';


function component() {
	let element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return element;
}

function createH1(){
	let elementH1 = document.createElement('h2');

	elementH1.innerHTML = _.join(['这是从index.js中创建输出的:','你好','webpack'], ' ');
	return elementH1;


}

document.writeln('<img src="'+webImg+'" alt="">');
console.log("xml数据:");
console.log(Data)
console.log("print.js引入数据:");
console.log(printMe())
document.body.appendChild(component());
document.body.appendChild(createH1());

if(module.hot){
	module.hot.accept('./js/hot.js',function(){
		console.log('Accepting the updated hotMe module!');
		hotMe();
	})
}