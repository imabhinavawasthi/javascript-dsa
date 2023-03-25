var check=function(mp1,mp2){
    var s="abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<26;i++){
        if(mp1.has(s[i])==true&&mp2.has(s[i])==false){
            return false
        }
        else if(mp1.has(s[i])==false&&mp2.has(s[i])==true){
            return false
        }
        else if(mp1.has(s[i])==false&&mp2.has(s[i])==false){
            continue
        }
        else{
            if(mp1.get(s[i])!=mp2.get(s[i])){
                return false
            }
        }
    }
    return true
}
var findAnagrams = function(s, p) {
    var n=s.length
    var m=p.length
    if(n<m){
        return []
    }
    var mp1=new Map();
    for(let i=0;i<m;i++){
        if(mp1.has(p[i])){
            mp1.set(p[i],mp1.get(p[i])+1)
        }
        else{
            mp1.set(p[i],1)
        }
    }
    var mp2=new Map();
    for(let i=0;i<m;i++){
        if(mp2.has(s[i])){
            mp2.set(s[i],mp2.get(s[i])+1)
        }
        else{
            mp2.set(s[i],1)
        }
    }
    
    let i=0
    let j=m-1
    var ans=[]
    while(j<n){
        if(check(mp1,mp2)==true){
            ans.push(i)
        }
        j++
        if(mp2.has(s[j])){
            mp2.set(s[j],mp2.get(s[j])+1)
        }
        else{
            mp2.set(s[j],1)
        }
        if(mp2.has(s[i])){
            mp2.set(s[i],mp2.get(s[i])-1)
            if(mp2.get(s[i])==0){
                mp2.delete(s[i])
            }
        }
        i++
    }
    return ans
};