let s="abbaybb"

let n=s.length

var mp=new Map()

for(let i=0;i<n;i++){
    let x=s[i]
    if(mp.has(x)){
        mp.set(x,mp.get(x)+1)
    }
    else{
        mp.set(x,1)
    }
}

let c=0

mp.forEach((value,key)=>{
    if(value%2==1){
        c++
    }
})

if(c>1){
    console.log("NO");
}
else{
    console.log("YES");
}