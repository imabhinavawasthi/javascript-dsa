let n=10

function sumN(n){
    //base
    if(n<=0)return 0
    //recursive
    return n+sumN(n-1)
}

console.log(sumN(n));

