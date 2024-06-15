// function currying in two different methods

// using BIND


let multiply = function(x, y){
  console.log(x*y);
}

let mul = multiply.bind(this, 2)
mul(3)

let mul2 = function(x){
    return function(y){
        console.log(x * y);
    }
}

let m = mul2(4);
m(10)
