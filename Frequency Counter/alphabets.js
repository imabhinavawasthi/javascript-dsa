let s="ksdhfvkhdgvhfsksjdffvbbv"

var mp=new Map()

for(let i=0;i<s.length;i++){
    let x=s[i]

    if(mp.has(x)==true){//already present
        mp.set(x,mp.get(x)+1)
    }
    else{//not present
        mp.set(x,1);
    }
}
let c=0;
mp.forEach((value,key)=>{
    if(value>1)c++;
})

console.log(c);