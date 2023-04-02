var equalFrequency = function(s) {
    var map=new Map()
    var n=s.length
    for(let i=0;i<n;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }
        else{
            map.set(s[i],1)
        }
    }
    var str="abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<26;i++){
        if(map.has(str[i])){
            if(map.get(str[i])==1){
                map.delete(str[i])
            }
            else{
                map.set(str[i],map.get(str[i])-1)
            }
            var arr=[]
            map.forEach((value,key)=>{
                arr.push(value)
            })
            arr.sort((a,b)=>a-b)
            if(arr[0]==arr[arr.length-1])return true
            if(map.has(str[i])){
                map.set(str[i],map.get(str[i])+1)
            }
            else{
                map.set(str[i],1)
            }
        }
    }
    return false
    
};