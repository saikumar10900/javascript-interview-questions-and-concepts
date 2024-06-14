// polyfill for bind

const obj = {
  fs: 'Saikumar',
  ls: 'Bolisetti'
};

const getName = function(district, state, country){
  console.log(this.fs, this.ls, 'from', district, state, country);
}

const originalBindMethod = getName.bind(obj, 'KDP,', 'AP,', 'IND.');
originalBindMethod();

Function.prototype.myBind = function(...params){
  let context = this
  return function(...params2){
    context.apply(params[0], [...params.slice(1), ...params2])
  }
};


const myBindMethod = getName.myBind(obj, 'KDP,');
myBindMethod('AP,', 'IND.')
