let obj = { b: 0 };

function makeCounter(num) {
  this.a = 0;
  this.increase = function () {
    console.log(this);
    return parseInt(num++);
  };
}

let counter1 = new makeCounter(1);
let counter2 = new makeCounter(2);
let counter3 = new makeCounter(3);

// console.log(counter1.increase());
// console.log(counter1.increase());
// console.log(counter1.increase());

var a = 0;
function fnThis() {
  // var a = "2";
  this.a = 0;
  const b = () => {
    console.log(this);
  };

  b();
}

fnThis.call();
// console.log(obj);
