var s1="asbcdfvsdvf"
var s2="abcdfdvsfvs"

var mp1=new Map()
var mp2=new Map()

for(let i=0;i<s1.length;i++){//O(N)
    let x=s1[i]
    if(mp1.has(x)==true){
        let v=mp1.get(x)
        v++
        mp1.set(x,v)
    }
    else{
        mp1.set(x,1)
    }
}

for(let i=0;i<s2.length;i++){//O(N)
    let x=s2[i]
    if(mp2.has(x)==true){
        let v=mp2.get(x)
        v++
        mp2.set(x,v)
    }
    else{
        mp2.set(x,1)
    }
}

var ans=true

for(let i=0;i<s1.length;i++){
    var x=s1[i]
    if(mp1.has(x)&&mp2.has(x)){
        if(mp1.get(x)==mp2.get(x)){
            continue
        }
    }
    ans=false
    break
}

for(let i=0;i<s2.length;i++){
    var x=s2[i]
    if(mp1.has(x)&&mp2.has(x)){
        if(mp1.get(x)==mp2.get(x)){
            continue
        }
    }
    ans=false
    break
}

if(ans==true){
    console.log("Anagram");
}
else{
    console.log("Not an Anagram");
}