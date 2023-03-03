let arr=["1","2","7","2","7","2","1"]

var mp=new Map()

for(let i=0;i<arr.length;i++){
    let x=arr[i]
    if(mp.has(x)){//already present
        mp.set(x,mp.get(x)+1)
    }
    else{//not present
        mp.set(x,1);
    }
}

mp.forEach((value,key)=>{
    console.log("key=",key," and value=",value);
})