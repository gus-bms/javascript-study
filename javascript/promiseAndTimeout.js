console.log("script start"); // A

setTimeout(function () {
  // B
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    // C
    console.log("promise1");
  })
  .then(function () {
    // D
    console.log("promise2");
  });

console.log("script end"); // E
