let arr=[3,2,3,1,4,2,3,1,4,5,2,7,2,3,3,7]

var mp=new Map()

for(let i=0;i<arr.length;i++){
    let x=arr[i]
    if(mp.has(x)==false){//not already present
        mp.set(x,1);
    }
    else{//already present
        mp.set(x,mp.get(x)+1)
    }
}

mp.forEach((value,key)=>{
    console.log("key=",key," and value=",value);
})