const x = 10;
function a(){
  function b(){
    function c(){
      console.log(x);
    }
    c();
  }
  b();
}
a();

// Here, scope chain comes into picture where the function c can have the scope of it's parent and grand parent.
