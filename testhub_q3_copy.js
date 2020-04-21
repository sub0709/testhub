const axios = require('axios');

// node.js 환경에서 API 호출시 권한이 필요
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

axios.get('https://www.2xl.kr/api/cardsms/group/category').then(rep => {
    
    let map = { };

    const arr1 = [];
    let arr2 = [];
    let arr3 = [];

    let idx_arr = [];
    let n = 0;

    const jsonData = rep.data.data;

    /*
     * (1) https://www.2xl.kr/api/cardsms/group/category 의 데이터 중 group1 이 '술/음료' 인 값만 arr1 배열에 저장할것
     */
    for (let key of jsonData) {
        if (key.group1 === '술/음료') {
            arr1.push(key);
        }
    }

    // arr2 = arr1; 사용시 한쪽 배열의 값만 바꿔도 두 배열의 값이 계속 같아짐 (참조?)
    arr2 = arr1.slice();

    /*
     * (2) 1번에서 만들어진 arr1배열을 변수 arr2로 복제하고 arr2의 group2 값에 '주'가 있으면 
     */
    for (let key2 of arr2) {

        if (key2.group2.includes('주')) {

            let idx = arr2.indexOf(key2);
            idx_arr.push(idx);

            // arr2.splice(idx, 1); // 해당 인덱스부터 1개의 인덱스 삭제
            // arr2[4], 소주/막걸리 삭제 안됨
        }
    }

    // console.log('idx_arr = ', idx_arr);

    for (let j=idx_arr.length-1; j>=0; j--) {
        arr2.splice(idx_arr[j], 1);
    }

    /*
     * (3) arr1 배열에서 map() 함수를 이용하여 group2 값만 있는 arr3배열을 만들것.
     */
    for (let key3 of arr1) {

        if (!map[key3]) {
            arr3.push(key3.group2);
        }
    }

	console.log('arr3 =', arr3);
	console.log('arr2 =', arr2);
	console.log('arr1 =', arr1);
});