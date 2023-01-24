function reverseArray(arr) {//N->length
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i])
    }
    return newArr
  }
  const reversedArray1 = reverseArray([1, 2, 3]) // [3, 2, 1]
  const reversedArray2 = reverseArray([1, 2, 3, 4, 5, 6]) // [6, 5, 4, 3, 2, 1]
  //TC-> O(N)-->Linear
  //SC-> O(N)-->Linear