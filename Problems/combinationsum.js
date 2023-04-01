var combinationSum = function(arr, target) {
    let ans=[]
    var combination=function(i,arr,target,c){
        //base
        if(target==0){
            ans.push([...c])
            return
        }
        if(i==arr.length)return
        
        //recursive
        if(arr[i]<=target){
            c.push(arr[i])
            combination(i,arr,target-arr[i],c)
            c.pop()
        }

        combination(i+1,arr,target,c)//not take
    }
    combination(0,arr,target,[])
    return ans
};