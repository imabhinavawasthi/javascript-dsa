let m=BigInt(1000000007);
function powfun(a,n){//O(logn)
    //base
    let ans=BigInt(1)
    if(n==0)return ans

    //recursion
    ans=powfun(a,Math.floor(n/2))//a^n/2
    ans=BigInt(ans)
    if(n%2==1){//odd
        ans=(ans%m*ans%m)%m;
        ans=(ans%m*BigInt(a)%m)%m;
    }
    else{//even
        ans=(ans%m*ans%m)%m;
    }
    return ans%m
}
var countGoodNumbers = function(n) {
    var even=0,odd=0;
    if(n%2==1){
        even=Math.floor(n/2)+1//even
        odd=Math.floor(n/2)//odd
    }
    else{
        even=Math.floor(n/2)
        odd=Math.floor(n/2)
    }
    var ans=(powfun(5,even)%m*powfun(4,odd)%m)%m
    return ans
};