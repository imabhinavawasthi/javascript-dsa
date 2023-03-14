let arr=[9,9,3,5,8,5,9,4]

var mp=new Map()

for(let i=0;i<arr.length;i++){//O(N)
    let x=arr[i]
    if(mp.has(x)==true){
        let v=mp.get(x)
        v++
        mp.set(x,v)
    }
    else{
        mp.set(x,1)
    }
}

mp.forEach((value,key)=>{
    console.log(key,"->",value);
})


