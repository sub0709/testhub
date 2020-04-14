const fs = require('fs');

const text = fs.readFileSync('./dic.txt').toString();

const map = {};
const rows = text.split('\n');
rows.forEach(function(v) {
	const region = v.substring(0, 2);
	if(!map[region])
		map[region] = 0;

	map[region]++;
});
for(key in map) {
	if(map[key] >= 50)
		console.log(key, map[key]);
}
