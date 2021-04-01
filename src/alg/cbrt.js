const num = 27;

function cbrt(num) {
  if (num === 0 || num === 1 || num === -1) {
    return num;
  }
  let base = Math.abs(num) < 1 ? (num > 0 ? 1 : -1) : 0;
  let min = Math.min(base, num);
  let max = Math.max(base, num);
  while (max - min > 0.000001) {
    let mid = (min + max) / 2;
    let ret = mid * mid * mid;
    if (ret > num) {
      max = mid;
    } else if (ret < num) {
      min = mid;
    } else if (ret === num) {
      return mid.toFixed(1);
    }
    console.log(min, mid, max, ret);
  }
  return min.toFixed(1);
}

console.log(cbrt(num));
console.log(Math.cbrt(num).toFixed(1));
