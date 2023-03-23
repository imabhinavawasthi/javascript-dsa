function pow(n, p){
    if(p==0n) return 1n;
    let x = pow(n, Math.floor(p/2));
    return (p%2==0 ? x*x : x*x*n)%1000000007n;
}

function countGoodNumbers(n){
    if(n==1) return 5;
    let e = Math.ceil(n/2);
    let o = Math.floor(n/2);
    return pow(5n, e)*pow(4n, o)%1000000007n;
}
