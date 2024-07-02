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
// the function will search for the variable in its scope first, if it doesn't find then the control moves to the parent lexical scope, and repeats.
