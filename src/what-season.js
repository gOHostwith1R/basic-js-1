//const CustomError = require("../extensions/custom-error");
//module.exports = 
module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!'
  if(!date.getTime()) throw new Error();
  const month = date.getMonth()
  if(month < 2 || month === 11){ // 0 1 -w
    return 'winter'
  } else if(month >1 && month <5) //4 5 6 -s
  return 'spring'
  else if ( month >4 && month <8) { // 7 8 9 -s
    return 'summer'
  } else return 'autumn';
};
//console.log(getSeason({ John: 'Smith' }));
