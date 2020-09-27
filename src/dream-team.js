//const CustomError = require("../extensions/custom-error");
//module.exports = 
module.exports =  function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let str='';
  members.forEach(element => {  
    if(typeof element != 'string') {
      return false
    } else {
      element = element.trim()
      str+=element[0]
    }
  });
  console.log(str);
  str = str.toUpperCase()
  .split('')
  .sort(function(a,b) {
    return a.charCodeAt() - b.charCodeAt();
  })
  .join('')
  console.log(str);
  return str;
};
