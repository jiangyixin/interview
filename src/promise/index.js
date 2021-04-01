function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("argument must be anarray"))
    }
    var countNum = 0;
    var promiseNum = promises.length;
    var resolvedvalue = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(function (value) {
          countNum++;
          resolvedvalue[i] = value;
          if (countNum === promiseNum) {
            return resolve(resolvedvalue)
          }
        }, function (reason) {
          return reject(reason);
        });
      })(i);
    }
  })
}

// var p1 = Promise.resolve(1),
//   p2 = Promise.resolve(2),
//   p3 = Promise.resolve(3);

// promiseAll([p1, p2, p3]).then(function (value) {
//   console.log(value);
// })

var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 0)
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 200)
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    try {
      console.log(XX.BBB);
    } catch (exp) {
      resolve("error");
    }
  }, 100)
});
Promise.all([p1, p2, p3]).then(function (results) {
  console.log("success")
  console.log(results);
}).catch(function (r) {
  console.log("err");
  console.log(r);
});
