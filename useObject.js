// import moment from 'moment';
let moment = require('moment');

const axios = require('axios');
const https = require("https");
let map = {};

// https의 url 호출을 위한 axios 인스턴스 생성. 
const instance = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
});

const call = () => instance.get('https://www.2xl.kr/api/cardsms/group/category')
  .then(response => {
    let jsonArray = [];
    let arr1 = [];
    jsonArray = response.data.data;

    // 1. https://www.2xl.kr/api/cardsms/group/category 의 데이터 중 group1 이 '술/음료' 인 값만 arr1 배열에 저장할것
    for (let ii = 0; ii < jsonArray.length; ii ++) {
      if (jsonArray[ii].group1 === '술/음료') {
        arr1.push(jsonArray[ii]);
      }
    }
    console.log("<--------------------------------------------->")
    console.log(arr1);

    // 2. 1번에서 만들어진 arr1배열을 변수 arr2로 복제하고 arr2의 group2 값에 '주'가 있으면 삭제할것
    let arr3 = [];
    let arr2 = [];
 
    arr2 = arr1;
    for (let ii = 0; ii < arr2.length; ii ++) {
      if (arr2[ii].group2.indexOf("주") != -1) {
        // going on ...
      }
      else {
        arr3.push(arr2[ii]);
      }
    }
    
    arr2 = arr3;
    console.log("<--------------------------------------------->")
    console.log(arr2);

    // 3. arr1 배열에서 map() 함수를 이용하여 group2 값만 있는 arr3배열을 만들것.

    for(const item of arr1) {
      // console.log(item);
      if(! map[item.group1]) {
          map[item.group1] = [];
      }
      map[item.group1].push(item.group2);
  }
  console.log("<--------------------------------------------->")
  console.log(map['술/음료']);


  console.log("<--------------------------------------------->")
  console.log(`${moment()}`);
  // moment() // 현재날짜값을 가져옵니다.

  console.log(`${ moment().format("YYYY년 MM월 DD일 HH:mm:ss") }`);
  console.log(`${ moment().format("YYYY년 MM월 DD일") }`);
  console.log(`${ moment().format("YYYY.MM.DD") }`);
  console.log(`${ moment().format("YYYY/MM/DD") }`);
  console.log(`${ moment().format("YYYY-MM-DD") }`);

  moment('2020-04-19', 'YYYY-MM-DD')
  console.log(`${ moment().format("2020-04-19") }`);
  console.log(`${ moment('20200401').format("YYYY-MM-DD") }`);

  // console.log(`${ moment().format('2019-12-10', 'YYYY-MM-DD') }`};

  // moment().format('YYYY-MM-DD'); // 년도-월-일
  // moment().format('hh:mm:ss'); // 시:분:초
  // const nowDate = moment('2020-04-20');
  // console.log(nowDate); // 2019-12-07

  }).catch((error) => {
    console.log(error);
  });
call();