function a(){
    var b = 10;
    function c(){
        console.log(b);
    }
    return c;
}
var result = a();
result()

// output
// 10

// function c formed a closure with its parent environment with b.
