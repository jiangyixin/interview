//

const permute = function(nums) {
  const res = [];
  const used = {};
  function dfs(path) {
    if (path.length === nums.length) {  // 完成一次排列
      res.push([...path]);
      return;
    }
    for (const num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  dfs([]);
  return res;
};

const nums = [1, 2, 3];

console.log(permute(nums));
