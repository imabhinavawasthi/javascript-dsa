var maximumSwap = function(num) {
    let s=num.toString();
    let sorted=s.split('').sort((a,b)=>b-a).join('')
    if(num<10)return num
    if(s==sorted)return num

    let ans=null
    for(let i=0;i<s.length;i++){
        if(s[i]==sorted[i]){
            continue
        }
        else{
            ans=s.split('')
            
            let index=ans.lastIndexOf(sorted[i])
            ans[index]=s[i]
            ans[i]=sorted[i]
            break
        }
        
    }
    return ans.join('')
};