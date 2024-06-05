function printResult(){
  for (var i = 1; i < 6; i++) {
    function printValue(value){
      setTimeout(() => {
        console.log(value)
      }, value * 1000);
    }
    printValue(i);
  }
}
printResult();
