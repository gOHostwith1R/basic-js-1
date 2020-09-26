const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
 let counter = 0;
 matrix.forEach(element => {
   element.forEach(element2 =>{
     if(element2==='^^'){
       counter++;
     }
   });
 });
 return counter;
};
