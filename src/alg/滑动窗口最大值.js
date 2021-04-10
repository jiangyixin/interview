/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  if (k === 0 || nums.length <= 0) return [];
  const result = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    result[i] = Math.max(...nums.slice(i, i + k));
  }
  return result;
};

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]

const nums = [1, 3, -1, -3, 5, 3, 6, 7];

console.log(maxSlidingWindow(nums, 3));
