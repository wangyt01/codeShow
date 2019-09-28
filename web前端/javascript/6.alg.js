/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 08:21:11
 * @LastEditTime: 2019-08-21 09:10:11
 * @LastEditors: Please set LastEditors
 */
var array = function randomArray(length) {
    var len = length || 20;
    var arr = [];
    for (i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * i * 10));
    }
    return arr;
}
// 冒泡排序
function bullbeSort(array) {
    var cycle = 0;
    var len = array.length;
    for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            cycle++;
        }
    }
    document.write('循环次数：' + cycle+'<br>');
    return array;
}
sortResult = bullbeSort(array());
document.write(sortResult + '<br>');
// 冒泡排序-优化
function optimizedBullbeSort(array) {
    var cycle = 0;
    var swapped = false;
    for (i = 0; i < array.length - 1; i++) {
        swapped = false;
        for (j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
            cycle++;
        }
        // If there were no swaps then array is already sorted and there is
        // no need to proceed.
        if (!swapped) {
            document.write("循环次数1：" + cycle + '<br>');
            return array;
        }
    }
    document.write("循环次数2：" + cycle);
    return array;
}
sortResult = optimizedBullbeSort(array());
document.write('[' + sortResult + ']' + '<br>');
// console.log(sortResult);
// 选择排序

// 二分排序

// 快速排序

// 希尔排序


// 归并排序





