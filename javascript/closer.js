function a(num) {
  return function () {
    return num++;
  };
}

// let b = a(1);
// let c = a(1);
// let d = a(1);

// console.log(b, c, d);

function makeCounter(num) {
  return function () {
    return parseInt(num);
  };
}

let counter1 = makeCounter(1);
let counter2 = makeCounter(2);
let counter3 = makeCounter(2);

console.log(counter1()); // 0
console.log(counter2()); // 1
console.log(counter3()); // 2
