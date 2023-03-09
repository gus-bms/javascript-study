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
