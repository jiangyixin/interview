// 有一个元素全部为数字的数组，让你从中取连续的 K 个元素。请你写一个算法，求取出来的数字加起来的最大值

var arr = [1, 6, 5, 8, 7, 4, 2, 3, 9, 3, 1, 8];
var k = 5;
var ret = getMax(arr, k);
// 30, 下标1到5之和

function getMax(arr, k) {
  let sum = arr.slice(0, k).reduce((sum, i) => sum + i);
  let max = sum;
  for (let i=0; i < arr.length - k - 1; i++) {
    let cur = sum - arr[i] + arr[i + k];
    if (cur > max) {
      max = cur;
    }
  }
  return max;
}

console.log(ret);
