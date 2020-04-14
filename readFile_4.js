/* 지역별로 학교 수 Count */

const fs = require('fs');

var array = fs.readFileSync('dic.txt').toString().split('\n');
var cnt = 0;
var i = 0;
// var arrCnt = new Object(/*name, count*/); // key : n, count
var arr = [];
const arrCnt = {
    name : '',
    count : 0
}

for (i in array) {
    array[i] = array[i].substring(0,2);
    // count++;
}
array = array.sort();
// console.log(array); // 오름차순 정렬
// console.log(count); // 12359
// console.log(i); // 12358


for (let n=0; n<array.length; n++) {
    if (array[n] === array[n+1]) { // equals
        cnt++;
    } else {

        // n push, count push
        var obj = {

        }

        obj.name = array[n];
        obj.count = cnt;
        arr.push(obj);
        
        /*
        arrCnt.name = array[n];
        arrCnt.count = cnt;
        arr.push(arrCnt);
        */
        cnt = 0;
    }
}

/* 
 * 학교이름의 첫 두글자는 지역명이라고 가정하고
 * 지역별로 몇개의 학교가 있는지 카운트 할것
 */
// console.log(arr);


// if (arr.count >= 50) {
//     console.log(arr);
// }

for (let n=0; n<arr.length; n++) {
    if (arr[n].count >= 50) {
        /* 50개 이상의 학교가 있는 지역 이름과 카운트를 출력할것 */
        console.log(arr[n]);
    }
}

