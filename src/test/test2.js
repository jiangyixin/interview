// 4
// A,C,C,F
// C,D,E,D
// B,E,S,S
// F,E,C,A
// ACCESS

function start(matrix, target) {
  let res = [];
  const used = {};
  function dfs(path) {
    if (path.length === target.length) {
      res = [...path];
      return;
    }
    const next = target[path.length];
    const curPath = path[path.length - 1];
    for (const i in matrix) {
      const rows = matrix[i];
      for (const j in rows) {
        const col = rows[j];
        if (res.length) break;
        if (next === col && !used[`${i}-${j}`] && isNeighbor(curPath, { i: Number(i), j: Number(j) })) {
          path.push({ i: Number(i), j: Number(j), col });
          used[`${i}-${j}`] = true;
          dfs(path);
          path.pop();
          used[`${i}-${j}`] = false;
        }
      }
    }
  }
  function isNeighbor(curPos, { i, j }) {
    if (!curPos) return true;
    return (Math.abs(curPos.i - i) === 1 && curPos.j === j)
      || (Math.abs(curPos.j - j) === 1 && curPos.i === i);
  }
  dfs([]);
  return res;
}

const matrix = [
  ['A', 'C', 'C', 'F'],
  ['C', 'D', 'E', 'D'],
  ['B', 'E', 'S', 'S'],
  ['F', 'E', 'C', 'A'],
];
const target = 'ACCESS';

console.log(start(matrix, target.split('')));
