//// 原始 list 如下
// let list =[
//     {id:1,name:'部门A',parentId:0},
//     {id:2,name:'部门B',parentId:0},
//     {id:3,name:'部门C',parentId:1},
//     {id:4,name:'部门D',parentId:1},
//     {id:5,name:'部门E',parentId:2},
//     {id:6,name:'部门F',parentId:3},
//     {id:7,name:'部门G',parentId:2},
//     {id:8,name:'部门H',parentId:4}
// ];
// const result = convert(list, ...);
//
// // 转换后的结果如下
// let result = [
//     {
//       id: 1,
//       name: '部门A',
//       parentId: 0,
//       children: [
//         {
//           id: 3,
//           name: '部门C',
//           parentId: 1,
//           children: [
//             {
//               id: 6,
//               name: '部门F',
//               parentId: 3
//             }, {
//               id: 16,
//               name: '部门L',
//               parentId: 3
//             }
//           ]
//         },
//         {
//           id: 4,
//           name: '部门D',
//           parentId: 1,
//           children: [
//             {
//               id: 8,
//               name: '部门H',
//               parentId: 4
//             }
//           ]
//         }
//       ]
//     },
//   ···
// ];

let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
  { id: 9, name: '部门I', parentId: 6 },
];

function convert(list1) {
  const list = list1.map(item => { return { ...item } });
  const idsObj = {};
  const res = [];
  list.forEach((item, i) => {
    idsObj[item.id] = i;
  });
  list.forEach((item, i) => {
    const pIndex = idsObj[item.parentId];
    if (pIndex >= 0) {
      if (!list[pIndex].children) {
        list[pIndex].children = [];
      }
      list[pIndex].children.push(list[i]);
    } else {
      res.push(list[i]);
    }
  });
  return res;
}

const result = convert(list);

console.log(JSON.stringify(result));

function convert1(list) {
  const res = []
  const map = list.reduce((res, v) => {
    res[v.id] = v
    return res;
  }, {})
  console.log(map);
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item)
      continue
    }
    if (item.parentId in map) {
      const parent = map[item.parentId]
      parent.children = parent.children || []
      parent.children.push(item)
    }
  }
  return res
}

const result1 = convert1(list);

console.log(JSON.stringify(result1));
