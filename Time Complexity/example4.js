function multiplyAll(arr1, arr2,arr3) {//N,M,L
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {//N
      for (let j of arr2) {//M
        for(let k of arr3){//L
            total += i * j *k//N*M*L
        }
      }
    }
    return total
  }
  //TC->O(N*M*L)
  let result1 = multiplyAll([1, 2], [5, 6]) // 33
  let result2 = multiplyAll([1, 2, 3, 4], [5, 3, 1, 8]) // 170