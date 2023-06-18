var topKFrequent = function(nums, k) {
    let n=nums.length
    let map={}
    for(let i=0;i<n;i++){
        let x=nums[i]
        if(map[x]){
            map[x]++
        }
        else{
            map[x]=1
        }
    }
    console.log(Object.entries(map));
    console.log(Object.entries(map).sort((a,b)=>a[1]-b[1]));
    console.log(Object.entries(map).sort((a,b)=>a[1]-b[1])
    .slice(-k));
    console.log(Object.entries(map).sort((a,b)=>a[1]-b[1])
    .slice(-k).map((item)=>item[0]));
}

topKFrequent([5,2,1,5,2,1,8,2,1,2,1,1,3,3],2)