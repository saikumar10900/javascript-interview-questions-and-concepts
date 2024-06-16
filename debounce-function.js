/// debouncing


let count = 1;
let fetchDataFromAPI = (a, b) => {
  console.log("fetching....", count++, a, b);
};

let betterFunction = function (fn, delay) {
  let timer;
  return function (...params) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, params);
    }, delay);
  };
};

let debounce = betterFunction(fetchDataFromAPI, 400);

let inputBox = document.getElementById("input-box");

inputBox.addEventListener("keyup", () => {
  debounce("YouTube", "Snapchat");
});
