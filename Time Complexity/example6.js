function linearithmic(n) {
    for (let i = 0; i < n; i++) {//O(N)
      for (let j = 1; j < n; j = j * 2) {//O(log2N)
        console.log("Hello")
      }
    }
  }

  //O(NlogN)