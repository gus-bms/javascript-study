function solution(n) {
  let answer = 0;
  const dfs = (board, row) => {
    // 열과 선언된 수가 같으면 답을 추가한다.
    // 재귀함수를 돌면서 행이 n의 값까지 오게 된다면 모든 조건을 만족한것이다.
    if (row === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        // 각 행의 열의 위치를 옮겨준다.
        board[row + 1] = i;
        // 각 행의 열의 위치를 옮기면서 조건을 만족할 경우 다음행으로 이동시키기 위해
        // 재귀함수를 호출한다.
        // 재귀함수가 종료되고 그 전에 호출되었던 함수가 다시 실행되는것은 분기점이다.
        if (isValid(board, row + 1)) dfs(board, row + 1);
      }
    }
  };

  // 백트레킹스 알고리즘 제한사항에 해당할 경우 해당 브렌치를 쳐내서 부담을 줄임
  const isValid = (board, row) => {
    //
    for (let i = 1; i < row; i++) {
      // 세로가 겹치는지 확인
      // 각 행의 열이 같다면 취소임.
      // 대각선이 겹치는지 확인
      // 열과 열의 차이와 행과 행의 차이가 같으면 같은 대각선상에 있음.
      if (
        board[i] === board[row] ||
        Math.abs(board[i] - board[row]) === Math.abs(i - row)
      )
        return false;
    }
    // 조건을 만족할 경우 true를 리턴함.
    return true;
  };

  for (let i = 1; i <= n; i++) {
    // 1차원 배열로 전달받은 n보다 1큰 배열을 생성한다.
    // board는 1차원이기 때문에 곧 각 인덱스에 위치한 숫자는 퀸이 위치하는 열을 의미한다.
    // 그렇기 때문에 각 행에는 한개의 퀸만 위치할 수 있다.
    const board = new Array(n + 1).fill(0);
    // 첫번째 행의 열 값은 순회시킨다.
    board[1] = i;
    // 깊이 우선 탐색 알고리즘을 호출한다.
    dfs(board, 1);
  }

  return answer;
}

console.log(solution(4));
