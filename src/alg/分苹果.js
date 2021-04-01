
function start(m, n, i = 1) {
  console.log('start:', m, n, i);
  if (m < 0 || n <= 0) {
    return 0;
  }
  if (m === 0 || m === 1 || n === 1) {
    return 1;
  }
  return (start(m - n, n, i + 1) + start(m, n - 1, i + 1));
}

const m = 7;
const n = 3;

const ret = start(m, n);
console.log(ret);
