let s="ABOBANOCCY";

var mp=new Map()

for(let i=0;i<s.length;i++){
    let x=s[i]
    if(mp.has(x)){//already present
        mp.set(x,mp.get(x)+1)
    }
    else{//not present
        mp.set(x,1);
    }
}

let c=0;
mp.forEach((value,key)=>{
    if(value%2==1){//odd
        c++;
    }
})

if(c>1){
    console.log("NO");
}
else{
    console.log("YES");
}