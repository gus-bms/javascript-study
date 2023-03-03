function solution(s) {
  var answer = 0;
  sc = 0;
  dc = 0;
  idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[idx] == s[i]) {
      sc++;
    } else {
      dc++;
    }
    if (sc == dc) {
      idx = sc == 1 ? 2 : dc * 2;
      answer++;
    }
    if (i == s.length - 1 && sc > dc) answer++;
    console.log(sc, dc);
  }

  return answer;
}

console.log(solution("aaabbaccccabbaa"));
