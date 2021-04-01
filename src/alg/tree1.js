const data = [{
  id: '1',
  name: 'test1',
  children: [
    {
      id: '11',
      name: 'test11',
      children: [
        {
          id: '111',
          name: 'test111'
        },
        {
          id: '112',
          name: 'test112'
        }
      ]

    },
    {
      id: '12',
      name: 'test12',
      children: [
        {
          id: '121',
          name: 'test121'
        },
        {
          id: '122',
          name: 'test122'
        }
      ]
    }
  ]
}];

const findByRecursive = (list, id) => {
  let res = [];
  const dfs = (arr, ids = []) => {
    for (const item of arr) {
      if (item.id === id) {
        res = [...ids, item.id];
        return;
      } else {
        if (item.children) {
          dfs(item.children, ids.concat([item.id]));
        }
      }
    }
  };
  dfs(list);
  return res;
}

const findByDfs = (arr, id) => {
  const path = [];
  const stack = [...arr];
  while (stack.length) {
    const item = stack.pop();
    path.push(item);
    if (item.children) {
      stack.push(...item.children);
    }
    if (item.id === id) {
      break;
    }
  }
}

console.log(findByDfs(data, '112'));
