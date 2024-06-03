const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise rejected');
  }, 5000);
});
