function solution(cards1, cards2, goal) {
  var answer = "";
  var cards1Idx = 0;
  var cards2Idx = 0;

  for (let i = 0; i < goal.length; i++) {
    let word = goal[i];
    if (word == cards1[cards1Idx]) {
      answer = "Yes";
      cards1Idx++;
    } else {
      answer = "No";
    }

    if (answer === "Yes") continue;
    if (word == cards2[cards2Idx]) {
      answer = "Yes";
      cards2Idx++;
      continue;
    } else {
      answer = "No";
      return answer;
    }
  }
  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
