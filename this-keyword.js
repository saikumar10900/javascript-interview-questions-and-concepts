// "use strict";
console.log(this); // window

function x() {
  console.log(this); // window in non-strict mode, undefined in strict mode
}
x();

const obj = {
  name: "Saikumar",
  printName: function () {
    console.log(this); // obj itself
    console.log(this.name); // Saikumar
  },
};

obj.printName();

const obj2 = {
  name: "SK",
};

obj.printName.call(obj2); // SK

// nested functions

const q = {
  a: 10,
  getValue: () => {
    const z = () => {
      console.log(this);
    };
    z();
  },
};

q.getValue();
