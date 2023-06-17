function fib(n){//nth fibonacci number
    if(n==0)return 0
    if(n==1)return 1

    //recursive
    return fib(n-1)+fib(n-2)
} 

console.log(fib(20));