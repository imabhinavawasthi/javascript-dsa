findSubarray(arr, n){
    var pre=new Array(n)
    pre[0]=arr[0]
    for(let i=1;i<n;i++){
        pre[i]=pre[i-1]+arr[i]
    }
    var map=new Map()
    var ans=0
    for(let i=0;i<n;i++){
        if(pre[i]==0){
            ans++
        }
        if(map.has(pre[i])){
            ans+=map.get(pre[i])
            map.set(pre[i],map.get(pre[i])+1)
        }
        else{
            map.set(pre[i],1)
        }
    }
    return ans
}