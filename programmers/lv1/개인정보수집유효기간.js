function solution(today, terms, privacies) {
  var answer = [];
  today = new Date(today);
  var term = [],
    exp = [];
  terms.map((item) => {
    term.push(item.split(" ")[0]);
    exp.push(item.split(" ")[1]);
  });
  idx = 1;
  for (let p of privacies) {
    collectDay = new Date(p.split(" ")[0]);
    collectTerm = p.at(-1);
    i = term.findIndex((x) => x === collectTerm);
    collectDay.setMonth(collectDay.getMonth() + parseInt(exp[i]));
    collectDay.setDate(collectDay.getDate() - 1);
    if (collectDay.getDate() > 28) {
      collectDay.setMonth(collectDay.getMonth() + 1);
      collectDay.setDate(collectDay.getDate() - 28);
    }
    if (today > collectDay) answer.push(idx);
    idx++;
  }
  return answer;
}

//result [1,3]
console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
