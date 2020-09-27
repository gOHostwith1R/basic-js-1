const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
let T = 0.693/HALF_LIFE_PERIOD;
if(typeof sampleActivity != 'string' || sampleActivity <=0 || sampleActivity >=MODERN_ACTIVITY) {
    return false;
} 
if(isNaN(parseFloat(sampleActivity))) {
    return false;
}
let age=Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/T);
 return age;
};
