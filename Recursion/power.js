function pow(a,b){
    //base
    if(b==0)return 1

    //recursion
    return a*pow(a,b-1)
}

console.log(pow(5,2));

function powfun(a,n){//O(logn)
    //base
    let ans=1
    if(n==0)return ans

    //recursion
    ans=powfun(a,Math.floor(n/2))//a^n/2
    if(n%2==1){//odd
        ans=(ans%m*ans%m)%m;
        ans=(ans%m*a%m)%m;
    }
    else{//even
        ans=(ans%m*ans%m)%m;
    }
    return ans%m
}