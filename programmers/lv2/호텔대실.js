function solution(book_time) {
  // var fullRoom = new Map();
  var fra = new Array();
  book_time = book_time.sort();
  book_time.map((el, idx) => {
    // if (fullRoom.size == 0) {
    if (fra.length == 0) {
      // fullRoom.set(idx, el[1]);
      const [a, b] = el[1].split(":");
      fra.push(b * 60 + a * 3600 + 600);
      return;
    }

    const [a, b] = el[0].split(":");
    const [c, d] = el[1].split(":");
    startTime = b * 60 + a * 3600;
    endTime = d * 60 + c * 3600 + 600;

    isEmpty = fra.find((x) => x <= startTime);
    if (!isEmpty) fra.push(endTime);
    else fra[fra.indexOf(isEmpty)] = endTime;

    // fullRoom.forEach(function (value, key, map) {
    //   const [a, b] = value.split(":");
    //   const [c, d] = el[0].split(":");
    //   endTime = b * 60 + a * 3600 + 600;
    //   startTime = d * 60 + c * 3600;

    //   if (endTime > startTime) {
    //     fullRoom.set(idx, el[1]);
    //     return;
    //   } else {
    //     fullRoom.set(value, el[1]);
    //   }
    // });
    // if ()
  });

  return fra.length;
}

// console.log(
//   solution([
//     ["15:00", "17:00"],
//     ["16:40", "18:20"],
//     ["14:20", "15:20"],
//     ["14:10", "19:20"],
//     ["18:20", "21:20"],
//   ])
// );

console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "20:30"],
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
