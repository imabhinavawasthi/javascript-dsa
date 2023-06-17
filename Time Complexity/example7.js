function fibonacci(num) {
    // Base cases
    if (num === 0) return 0
    else if (num === 1) return 1
    // Recursive part
    return fibonacci(num - 1) + fibonacci(num - 2)
}
  //O(2^N)
  fibonacci(1) // 1
  fibonacci(2) // 1
  fibonacci(3) // 2
  fibonacci(4) // 3
  fibonacci(5) // 5