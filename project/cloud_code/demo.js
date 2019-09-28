            	var mons = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
/**
 * 是否闰年
 * @param  {[type]}  year [description]
 * @return {Boolean}      [description]
 */
function isLeapYear(year) {
  var  r = year / 100
  if (r === parseInt(r)) {
    r = year / 400
    return r === parseInt(r)
  }
  r = year / 4
  if (r === parseInt(r)) {
    return true
  }
  return false
}
/**
 * 获取天数
 * @param  {[type]} month [description]
 * @param  {[type]} year  [description]
 * @return {[type]}       [description]
 */
function getDaysOfMonth(month, year) {
  if (month === 2 && isLeapYear(year)) {
    return 29
  }
  return mons[month]
}
/**
 * 获取一年天数
 * @param  {[type]} year [description]
 * @return {[type]}      [description]
 */
function getMonthsOfYear(year) {
  if (isLeapYear(year)) {
    return 366
  }
  return 365
}

function diff(s1, s2) {
  var arr1 = s1.split('-').map(Number)
  var arr2 = s2.split('-').map(Number)
  var [year, month, day] = arr2.map((n, i) => n - arr1[i]);
  var date = [year, month, day];
  if (day < 0) {
    day += getDaysOfMonth(arr2[1], arr2[0])
    month--
  }
  if (month < 0) {
    month += getMonthsOfYear(arr2[0])
    year--
  }
  for(var i=0;i<date)
  return [year, month, day]
}
var d1_str = '2017-3-11'
var d2_str = '2018-3-26'
console.log(diff(d1_str, d2_str))