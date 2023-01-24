let n=6

function fac(n){
    //base
    if(n<=0)return 1
    //recursive
    return n*fac(n-1)
}

console.log(fac(n));

