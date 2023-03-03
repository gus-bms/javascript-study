function solution(data, col, row_begin, row_end) {
  var answer = 0;

  // col의 열을 먼저 오름차순 한다.
  // col의 열끼리 비교했을 때 같다면, 0번째 열을 내림차순으로 비교한다.
  data = data.sort((a, b) => {
    if (a[col - 1] > b[col - 1]) return 1;
    else if (a[col - 1] < b[col - 1]) return -1;
    else if (a[col - 1] === b[col - 1]) {
      if (a[0] < b[0]) return 1;
      else if (a[0] > b[0]) return -1;
      else return 0;
    }
    return 0;
  });

  // row_begin과 end 값을 포함하고 사이값만 루프를 태운다.
  // 각 배열 값을 인덱스로 나누고 나머지 값을 더한뒤 XOR 연산을 한 값을 더해준다.
  for (let i = row_begin; i <= row_end; i++) {
    answer ^= data[i - 1].reduce((a, c) => a + (c % i), 0);
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
