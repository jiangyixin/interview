// 186 186 150 200 160 130 197 200

function leftDp(arr) {
  let dp = [1];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp;
}

function rightDp(arr) {
  let dp = Array(arr.length).fill(1);
  for (let i = arr.length - 1; i >= 0; i--) {
    dp[i] = 1;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp;
}

function start(arr) {
  const left = leftDp(arr);
  const right = rightDp(arr);
  let min = arr.length;
  for (let i = 0; i < arr.length; i++) {
    const cur = arr.length - (left[i] + right[i] - 1);
    min = Math.min(min, cur);
  }
  return min;
}

const arr = [186, 186, 150, 200, 160, 130, 197, 200];
console.log(start(arr));
