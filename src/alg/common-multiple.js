
const num1 = 5;
const num2 = 7;

// 最小公倍数
function commonMultiple(num1, num2) {
  let maxDivisor = getMaxDivisor(num1, num2);
  return num1 * num2 / maxDivisor;
}

// 最大公约数
function getMaxDivisor(num1, num2) {
  const temp = num1 % num2;
  if (temp === 0) {
    return num2;
  }
  num1 = num2;
  num2 = temp;
  return getMaxDivisor(num1, num2);
}

console.log(commonMultiple(num1, num2));


