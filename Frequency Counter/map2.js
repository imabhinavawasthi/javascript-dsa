let arr=[2,1,2,8,2,1,5,2,1,8]
let n=arr.length

var mp=new Map()

for(let i=0;i<n;i++){
    let x=arr[i]
    if(mp.has(x)==false){//not present
        mp.set(x,1)
    }
    else{//already present
        mp.set(x,mp.get(x)+1)
    }
}

let ans=0
let count=0

mp.forEach((value,key)=>{
    if(value>count){
        ans=key
        count=value
    }
})

console.log(ans);
