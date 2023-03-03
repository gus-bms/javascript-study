function solution(t, p) {
  var answer = 0;

  for (let i = 0; i < t.length; i++) {
    if (
      p >= t.substring(i, i + p.length) &&
      t.substring(i, i + p.length).length == p.length
    )
      answer++;
  }
  console.log(answer);
  return answer;
}

solution("3141592", "271");
