// 20-21,15,18,30,5-10
// 15
const str = '20-21,15,18,30,5-10';
const del = 15;

const arr = str.split(',');
let nums = [];
for (const item of arr) {
  let [start, end] = item.split('-');
  if (!end) {
    end = start;
  }
  for (let i = Number(start); i <= Number(end); i++) {
    if (i !== del) {
      nums.push(i);
    }
  }
}
let newStr = '';
nums = nums.sort((a, b) => a - b);
console.log(nums);
let start = '';
for (let i = 0; i < nums.length; i++) {
  const prev = nums[i-1];
  const cur = nums[i];
  const next = nums[i+1];
  if (!prev) {
    start = cur;
  } else if (!next) {
    newStr += cur === start ? `${cur},` : `${start}-${cur},`;
  } else if (cur - prev > 1 && prev >= start) {
    newStr += prev === start ? `${start},` : `${start}-${prev},`;
    start = cur;
  } else if (next - cur > 1) {
    newStr += cur === start ? `${cur},` : `${start}-${cur},`;
    start = next;
  }
}
const ret = newStr.substr(0, newStr.length - 1);
console.log(ret);
