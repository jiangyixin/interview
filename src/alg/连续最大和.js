
function getMax(nums) {
  let dp = [...nums];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i], dp[i] + dp[i-1]);
  }
  return Math.max(...dp);
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4 ];

console.log(getMax(nums));
