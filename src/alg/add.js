function add1() {
  let args = [].slice.call(arguments);
  let fn = function () {
    let fn_args = [].slice.call(arguments)
    return add.apply(null, args.concat(fn_args))
  }
  fn.toString = function () {
    return args.reduce((a, b) => a + b)
  }
  return fn
}


function add(){
  let args = [...arguments];
  let addfun = function(){
    args.push(...arguments);
    return addfun;
  }
  addfun.toString = function(){
    return args.reduce((a,b)=>{
      return a + b;
    });
  }
  return addfun;
}

add(1);
add(1)(2);
add(1)(2)(3);
add(1)(2, 3);
add(1, 2)(3);
add(1, 2, 3);
