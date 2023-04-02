var findMaxAverage = function(arr, k) {
    var n=arr.length
    var sum=0
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }
    let l=0
    let r=k-1
    let avg=sum/k
    let ans=avg
    while(r<n-1){
        r++
        sum+=arr[r]
        sum-=arr[l]
        l++
        avg=sum/k
        ans=Math.max(ans,avg)
    }
    return ans
};