let m = require('moment');
// console.log(`moment => ${m()}`);

function dateFormat(num, str) {
    let numStr, date;
    let year = 0;

    if(!str) {
        str = '.';
    }

    numStr = num.toString();

    year = m().format('YYYY');
    month = m().format('MM');
    day = m().format('DD');

    date = year + str + month + str + day;

    console.log(date);
}

dateFormat(20200420, '/');
// dateFormat(20200420);
