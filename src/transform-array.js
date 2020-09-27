const CustomError = require("../extensions/custom-error");
//module.exports = 
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let newArr=arr.slice(0);


  for(let i=0;i<newArr.length;i++) {
    if(newArr[i] === '--discard-next') {
      newArr[i] = undefined;
      if(i+1 < newArr.length) {
        newArr[i+1] = undefined;
      }
    } else if (newArr[i] === '--discard-prev') {
      newArr[i] = undefined;
      if(i-1 > 0) {
        newArr[i-1] =undefined;
      }
    } else if (newArr[i] === '--double-next') {
      if(i+1 < newArr.length) {
        newArr[i] = newArr[i+1];
      } else {
        newArr[i] = undefined;
      }
    } else if ( newArr[i] === '--double-prev') {
      if(i-1 > 0) {
        newArr[i] = newArr[i-1];
      } else {
        newArr[i] = undefined;
      }
    }
  }
  for(let i=0;i<newArr.length;i++) {
    if(newArr[i] === undefined) {
      newArr.splice(i,1);
      i--;
    }
  }
  return newArr;
};
//console.log(transform([ '--discard-prev', 1, 2, 3 ]));