function logTime(arr) {
    let numberOfLoops = 0
    let n=arr.length
    for (let i = 1; i < n ; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
  }

  //O(log2N)
  let loopsA = logTime([1]) // 0 loops
  let loopsB = logTime([1, 2]) // 1 loop
  let loopsC = logTime([1, 2, 3, 4]) // 2 loops
  let loopsD = logTime([1, 2, 3, 4, 5, 6, 7, 8]) // 3 loops
  let loopsE = logTime(Array(16)) // 4 loops