var obj = { name: "규범" };

const say = function (city1, city2) {
  console.log(
    `my name is ${this.name} and my favorite city is ${city1} and ${city2}`
  );
};

// say.call(obj, "seoul", "busan");
// say.apply(obj, ["seoul", "busan"]);
let bound = say.bind(obj);
bound("seoul", "busan");
