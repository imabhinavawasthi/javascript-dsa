var mySqrt = function(x) {
    var l=1;
    var r=x
    var ans=0
    while(l<=r){
        var mid=Math.floor((l+r)/2)
        if(mid*mid==x){
            ans=mid
            break;
        }
        else if(mid*mid<x){
            ans=mid
            l=mid+1
        }
        else{
            r=mid-1
        }
    }
    return ans
};