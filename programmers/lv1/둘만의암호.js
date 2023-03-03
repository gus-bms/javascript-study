// function solution(s, skip, index) {
//   var answer = "";
//   s = s.split("");
//   skip = skip.split("");

//   if (50 < s.legth || s.length < 5) return "No";
//   else if (s.filter((z) => skip.includes(z)).length > 0) return "No";
//   else if (
//     s.concat(skip).filter((p) => p.charCodeAt() >= 65 && p.charCodeAt() <= 90)
//       .length > 0
//   )
//     return "No";

//   skip = skip.map((item) => item.charCodeAt() % 97);
//   let code;

//   let endPoint = "z".charCodeAt() % 97;
//   let startPoint = "a".charCodeAt() % 97;

//   answer = s.map((item) => {
//     code = item.charCodeAt() % 97;
//     for (let i = 0; i < index; i++) {
//       code++;
//       if (code > endPoint) code = startPoint;
//       skip.filter((x) => {
//         x === code ? code++ : code;
//       });
//     }
//     return String.fromCharCode(code + 97);
//   });
//   return answer.join("");
// }

const solution = (s, skip, index) => {
  let ans = "";
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g")
  );
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx];
    console.log(ans);
  }
  return ans;
};
console.log(solution("aukks", "wbqd", 5));
