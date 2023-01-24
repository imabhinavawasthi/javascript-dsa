let animals=["cat","dog","cat","horse","dog","dog","tiger","dog","horse"]

var mp=new Map()

for(let i=0;i<animals.length;i++){
    let a=animals[i]
    if(mp.has(a)){//already
        let x=mp.get(a)
        x++;
        mp.set(a,x);
    }
    else{
        mp.set(a,1);
    }
}

mp.forEach((value,key)=>{
    console.log("key=",key," and value=",value);
})