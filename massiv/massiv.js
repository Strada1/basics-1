let style = ["Джаз", "Блюз", "hghg"];
console.log(style);
style.push("Рок-н-ролл");
console.log(style);
style[Math.floor((style.length - 1) / 2)] = "Классика";
console.log(style);
console.log(style.shift());
style.unshift("Рэп", "Регги");
console.log(style);

let arr = [100, -9, 2, -3, 5];
function getMaxSubSum(arr) {
  let maxSum = 0;
  let sumArr = 0;
  for (const iterator of arr) {
    sumArr += iterator;
    maxSum = Math.max(maxSum, sumArr);
    if (sumArr < 0) sumArr = 0;
  }
  return maxSum;
}
console.log(getMaxSubSum(arr));
