const nums = [2, 5, 1, 5, 4, 5];
const nums1 = [1, 1, 2]; // 5
const nums2 = [1,2,5,8,9,3,3,3,3,4,5,4,6,2,1,2,2]; // 7

let arr3 = [1,1,1,1,5,2,2,2,3,4,2,1,4,5,2,2,1,1,3,3]
let arr4 = [1,2,2,3,3,3,4,4,0,4,5,5,5,5,0,6,6,6,6,0,6,2,2,3,1,3,4,0,4,4,5,1,2,3];
let arr5 = [1,5,9,6,5,1,5,8,0,4,2,5,6,3,2,1,5,9,1,1,0,2,0,0,0,2,5,8,2,6,1,5,9,9,9,4,4,5];
let arr6 = [8,5,9,8,0,0,1,2,5,4,6,9,7,2,6,9,1,1,2,2,3,6,3,6,4,5,8,5,0,4,4,5,9,8,6,9,2,1];
let arr7 = [15,1,16,1,5,9,8,7,5,6,9,8,7,1,3,4,5,6,15,11,0,19,12,14,15,0,1,13,2,17,6,3,4,18,2,6,14];


function start(nums, dp = Array(nums.length).fill(1)) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1] && dp[i] <= dp[i+1]) {
      dp[i] = dp[i+1] + 1;
      start(nums, dp);
      break;
    }
    if (nums[i] > nums[i-1] && dp[i] <= dp[i-1]) {
      dp[i] = dp[i-1] + 1;
      start(nums, dp);
      break;
    }
  }
  return dp;
}

const ret3 = start(arr3);
console.log(ret3.reduce((sum, i) => sum + i) * 100,  JSON.stringify(ret3));
const ret4 = start(arr4);
console.log(ret4.reduce((sum, i) => sum + i) * 100,  JSON.stringify(ret4));
const ret5 = start(arr5);
console.log(ret5.reduce((sum, i) => sum + i) * 100,  JSON.stringify(ret5));
const ret6 = start(arr6);
console.log(ret6.reduce((sum, i) => sum + i) * 100,  JSON.stringify(ret6));
const ret7 = start(arr7);
console.log(ret7.reduce((sum, i) => sum + i) * 100,  JSON.stringify(ret7));


