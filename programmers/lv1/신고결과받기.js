function solution(id_list, report, k) {
  answer = new Array(id_list.length);
  answer.fill(0, 0, answer.length);
  report = Array.from(new Set(report));

  reportList = new Map();
  report.map((item) => {
    const [a, b] = item.split(" ");
    if (!reportList.has(b)) reportList.set(b, { reporter: [a], cnt: 1 });
    else
      reportList.set(b, {
        reporter: reportList.get(b).reporter.concat(a),
        cnt: reportList.get(b).cnt + 1,
      });
  });
  reportList.forEach(function (value, key, map) {
    if (value.cnt >= k) {
      value.reporter.map((el) => {
        idx = id_list.indexOf(el);
        answer[idx] = answer[idx] + 1;
      });
    }
  });
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
