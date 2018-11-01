import _ from 'lodash';
import Vue from 'vue';
import App from './assets-vue/app.vue';
import "./common/reset.css";

// const root = document.createElement('div');
// document.body.appendChild(root);

new Vue({
  el: '#index',
  render: h => h(App)
})
// new Vue({
// 	el: "#app",
// 	render: (h) => (App)
// })
// .$mount(root)

// function component() {
// 	let element = document.createElement('div');

// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	return element;
// }

// function createH1(){
// 	let elementH1 = document.createElement('h2');

// 	elementH1.innerHTML = _.join(['这是从index.js中创建输出的:','你好','webpack'], ' ');
// 	return elementH1;


// }

// document.writeln('<img src="'+webImg+'" alt="">');
// console.log("xml数据:");
// console.log(Data)
// // console.log("print.js引入数据:");
// // console.log(printMe())
// document.body.appendChild(component());
// document.body.appendChild(createH1());

// if(module.hot){
// 	module.hot.accept('./js/hot.js',function(){
// 		console.log('Accepting the updated hotMe module!');
// 		hotMe();
// 	})
// }