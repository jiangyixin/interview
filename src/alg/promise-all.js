
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    let resolvedCounter = 0;
    const promiseNum = promises.length;
    const resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i])
          .then(function (value) {
            resolvedCounter++;
            resolvedValues[i] = value;
            if (resolvedCounter === promiseNum) {
              return resolve(resolvedValues);
            }
          }, function (reason) {
            return reject(reason);
          });
      })(i);
    }
  });
}

var p1 = Promise.resolve(1),
  p2 = Promise.resolve(2),
  p3 = Promise.reject(3);

Promise.all([p1, p2, p3]).then(function (results) {
    console.log(results);  // [1, 2, 3]
});

promiseAll([p1, p2, p3]).then(function (results) {
  console.log(results);  // [1, 2, 3]
});
