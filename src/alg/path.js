// 6
// 2, 5, 1, 5, 4, 5
// 3
// 3, 2, 1

function move(nums) {
  let dp = [1];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp;
}

console.log(move([2, 5, 1, 5, 4, 5]));
