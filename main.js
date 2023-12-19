let arr = [
  "men",
  "o'zim",
  "Abdumuhaymin",
  "boy ota",
  "Abdumuhaymin",
  "crush",
  "hihihi",
  "axaxaxa",
];
let input = "Abdumuhaymin";
function y(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (wtf[i] == b) {
      count += 1;
    }
  }
  return count;
}
console.log(y(arr, input));
