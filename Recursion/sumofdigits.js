function rec(n){
    if(n==0) return 0

    return n%10+rec(Math.floor(n/10))
}

console.log(rec(91734));