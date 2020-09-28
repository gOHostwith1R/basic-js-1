const CustomError = require("../extensions/custom-error");

const chainMaker = {
  makeChain: [],
  counter: 0,
  getLength() {
    return this.counter;
  },
  addLink(value) {
    this.counter++;
    (value === undefined) ? this.makeChain.push('( )'): this.makeChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!(Number.isInteger(position)) || position>this.counter || position === undefined) {
      this.makeChain = []
      throw new Error();
    } else {
      this.makeChain.splice(position-1,1);
    }
    return this
  },
  reverseChain() {
    this.makeChain = this.makeChain.reverse();
    return this;
  },
  finishChain() {
   let res = this.makeChain.join('~~');
   this.makeChain = [];
   return res;
  } 
};

module.exports = chainMaker;

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
