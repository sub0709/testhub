const axios = require('axios');

axios.get('https://www.2xl.kr/api/cardsms/group/category').then(rep => {
	const arr1 = [];
	for(const item of rep.data.data) {
		if(item.group1 == '술/음료') {
			arr1.push(item);
		}
	}

	const arr2 = [...arr1];
	for(let i = arr2.length - 1; i >= 0; i--) {
		const item = arr2[i];
		if(item.group2.indexOf('주') >= 0) {
			arr2.splice(i, 1);
		}
	}

	const arr3 = arr1.map((val) => {
		return val.group2;
	});

	console.log(arr3);
	console.log(arr2);
	console.log(arr1);
});