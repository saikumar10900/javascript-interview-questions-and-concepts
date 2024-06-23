let sum = (a) => (b) => b ? sum(a + b) : a; // arrow function way of solving

const sum2 = function(a){                  // function expression - old way
  return function(b){
    if(b){
      return sum2(a + b);
    }else{
      return a;
    }
  }
}

console.log(sum(1)(2)(3)(4)());  // 10
