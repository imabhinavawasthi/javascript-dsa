let arr=[11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 48, 4, 4, 48, 48, 3]

var mp=new Map()

for(let i=0;i<arr.length;i++){
    let x=arr[i]

    if(mp.has(x)){
        mp.set(x,mp.get(x)+1)
    }
    else{
        mp.set(x,1)
    }
}

let ans=[]

mp.forEach((value,key)=>{
    if(value&1){//odd
        ans.push(key)
    }
})

console.log(ans);