let a = Array.from({ length: 100 }, (v, i) => (v = i + 1));
let sum = a.reduce((acc, v, i) => acc + v, 0);

console.log(sum);
