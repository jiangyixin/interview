//给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const num = [2, 7, 11, 15];
const target = 18;

function calc(num, target) {
  for (const i in num) {
    for (const j in num) {
      if (i !== j && num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function answer (arr, target) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    const d = target - arr[i]
    if (map[d]) {
      return [i, map[d]]
    }
  }
  return new Error('404 not found')
}

console.log(calc(num, target));

console.log(answer(num, target));
