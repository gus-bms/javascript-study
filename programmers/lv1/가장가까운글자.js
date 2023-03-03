function solution(s) {
  var answer = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    d = s.slice(0, i);
    idx = d.lastIndexOf(s[i]);
    idx === -1 ? answer.push(idx) : answer.push(i - idx);
  }
  return answer;
  // hash = {};
  // return [...s].map((v, i) => {
  //   let result = hash[v] !== undefined ? i - hash[v] : -1;
  //   hash[v] = i;
  //   return result;
  // });
}

console.log(solution("banana"));
