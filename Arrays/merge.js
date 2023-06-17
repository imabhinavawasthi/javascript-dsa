let array1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
    { name: "a", value: 100 },
  ];
  let array2 = [
    { name: "c", value: 444 },
    { name: "d", value: 999 },
    { name: "a", value: 2 },
    { name: "b", value: 111 },
  ];

var mp=new Map()
for(let i=0;i<array1.length;i++){
    let x=array1[i].name
    if(mp.has(x)){//already present
        let a=mp.get(x)
        if(array1[i].value<a){
            mp.set(x,array1[i].value)
        }
        
    }
    else{//not present
        mp.set(x,array1[i].value);
    }
}

for(let i=0;i<array2.length;i++){
    let x=array2[i].name
    if(mp.has(x)){//already present
        let a=mp.get(x)
        if(array2[i].value<a){
            mp.set(x,array2[i].value)
        }
        
    }
    else{//not present
        mp.set(x,array2[i].value);
    }
}
let array3=[]
mp.forEach((value,key)=>{
    array3.push({name:key,value:value})
    // console.log("key=",key," and value=",value);
})

console.log(array3);