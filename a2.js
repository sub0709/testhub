const axios = require('axios');

axios.get('https://www.2xl.kr/api/cardsms/group/category').then(ret => {
	const map = {};
	ret.data.data.forEach((v) => {
		if(!map[v.group1]) {
			map[v.group1] = [];
		}

		map[v.group1].push(v.group2);
	});
	console.log(map);
});

function dateFormat(dt, delim) {
	if(!delim) {
		delim = '.';
	}

	var yyyy = dt.substring(0, 4);
	var mm = dt.substring(4, 6);
	var dd = dt.substring(6, 8);
	console.log([yyyy, mm, dd].join(delim));
}

const date = '20200430';
dateFormat(date);
dateFormat(date, '/');
dateFormat(date, '-');

const obj = {
	nv_mid : 10552490824,
	cat_id : 50001313,
	frm : 'NVSHATC',
	query : '전자렌지 선반 4단'
};

function serialize(obj) {
	const arr = []
	for(const key in obj) {
		arr.push(`key=${(obj[key] + '').replace(/ /g, '%20')}`);
	}
	return arr.join('=');
}
console.log(serialize(obj));
