
// regular替换成 test
var text1 = '正则表达式(regular expression)描述了一种字符串匹配的模式（pattern）';

var reg1 = text1.replace(/"^[A-Za-z0-9]+$"/,'111')
console.log(reg1);

// "Doe, John" 转换为 "John Doe"
 var text2 = 'Doe, John';
 console.log(text2.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"))
 /**
  * 1.\w 匹配字母、数字、下划线
  * 2.\s 匹配任何空白字符，包括空格、制表符，换页符等待
  * 3. + 匹配前面的子表达式一次或多次
  * 4. * 匹配前面的子表达式零次或多次
  */

// 查找重复单词
var text3 = "Is is the cost of of gasoline going up up";
var patt1 = /\b([a-z]+) \1\b/ig;
console.log(text3.match(patt1));