var p1 = Promise.resolve(1),
  p2 = Promise.resolve(2),
  p3 = Promise.resolve(3);

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resArr = [];
    let successCount = 0;
    const total = promises.length;
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(function (res) {
        resArr[i] = res;
        successCount++;
        if (successCount === total) {
          return resolve(resArr);
        }
      }, function (err) {
        return reject(err);
      })
    });
  });
}

Promise.all([p1, p2, p3]).then(function (results) {
  console.log(results);  // [1, 2, 3]
});

promiseAll([p1, p2, p3]).then(function (results) {
  console.log(results);  // [1, 2, 3]
});
