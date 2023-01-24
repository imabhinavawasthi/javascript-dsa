let s="i am learning dsadsadsa and coding"

let w=""
let max=0
let ans=""

for(let i=0;i<s.length;i++){
    if(s[i]!=' '){
        w+=s[i]
    }
    if(s[i]==' '||i==s.length-1){
        if(w.length>max){
            max=w.length
            ans=w
        }
        w=""
    }
}

console.log(ans);