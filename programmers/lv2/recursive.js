// const recursive = (acc, arr) => {
//   if (arr.length === 0) {
//     return acc;
//   } else {
//     return recursive(acc + arr[0], arr.slice(1));
//   }
// };

// let a = recursive(0, [3, 1, 2, 5, 4]);
// console.log(a);

let array = [1, 2, 3, [4, 3, [33, 1, 3, 4], 5], 6, 7, 8, [6, 3], 2, 1];

const recursive = (acc, arr) => {
  if (arr.length === 0) {
    return acc;
  } else {
    console.log(`call ${acc}, [${arr}]`);

    // return (
    //   typeof arr[0] === "number"
    //     ? recursive(acc + arr[0], arr.slice(1))
    //     : recursive(acc + recursive(0, arr[0])),
    //   arr.slice(1)
    // );

    return recursive(
      acc + (typeof arr[0] === "number" ? arr[0] : recursive(0, arr[0])),
      arr.slice(1)
    );
  }
};

console.log(recursive(0, array));
