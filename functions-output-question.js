var x = 100;
a();
b();
function a(){
  console.log(x);
  var x = 10;
}
function b(){
  console.log(x);
  var x = 1;
}


// undefined
// undefined
