
function printResult(){
  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000);
  }
}
printResult();
