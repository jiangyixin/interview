// 4
// 2 7 3 0
// A = B + 2C

const str = '2 7 3 0';
const arr = str.split(' ').map(Number);

function start(nums) {
  let res = [];
  const used = {};
  function dfs(path) {
    if (path.length === 3) {
      if (path[1] + 2 * path[2] === path[0]) {
        res = [...path];
        return;
      }
      return;
    }
    for (const i in nums) {
      if (res.length) break;
      if (used[i]) continue;
      const num = nums[i];
      path.push(num);
      used[i] = true;
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }
  dfs([]);
  return res;
}

console.log(start(arr));
