function solution(board, moves) {
  var answer = 0;
  var arr = [];
  for (y of moves) {
    for (x in board) {
      if (board[x][y - 1] == 0) continue;
      else {
        arr.push(board[x][y - 1]);
        board[x][y - 1] = 0;
        break;
      }
    }
  }
  do {
    arr.map((z, i) => {
      if (i > 0 && arr[i - 1] == z) {
        arr.splice(i - 1, 2);
        answer += 2;
      }
    });
  } while (arr.some((z, i) => i > 0 && arr[i - 1] == z));

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
