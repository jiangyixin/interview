var nums1 = [1, 1]
var nums2 = [1]
// [2, 2]

function intersection(arr1, arr2) {
  return arr1.filter(i1 => {
    if (arr2.includes(i1)) {
      return i1;
    }
  })
}

const intersect = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n of nums1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}

console.log(intersect(nums2, nums1));
