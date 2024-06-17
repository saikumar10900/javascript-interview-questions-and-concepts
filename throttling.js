// throttle

const getResults = (resultType) =>
  console.log("Getting results of ", resultType);

const doThrottle = function (fn, delay) {
  let flag = true;
  return function (...params) {
    let context = this;
    if (flag) {
      fn.apply(context, params);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const throttle = doThrottle(getResults, 300);

document.getElementById("text").addEventListener("keyup", (e) => {
  throttle(e.target.value);
});
