const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('P1 Success');
    rej('P1 Failure');
  }, 1000)
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('P2 Success');
    rej('P2 Failure');
  }, 2000)
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('P3 Success');
    rej('P1 Failure');
  }, 3000)
});

Promise.any([p1, p2, p3]).then((result) => console.log(result)).catch((err) => console.error(err.errors));
