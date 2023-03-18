findSubString(s){
    let n=s.length
    if(n==1)return 1
    var mp=new Map()
    for(let i=0;i<n;i++){
        if(mp.has(s[i])){
            let x=mp.get(s[i])
            mp.set(s[i],x+1)
        }
        else{
            mp.set(s[i],1)
        }
    }
    let d=mp.size
    mp.clear()
    let l=0,r=1
    mp.set(s[0],1)
    let ans=n
    while(r<=n){
        if(mp.size==d){
            let len=r-l
            ans=Math.min(ans,len)
            let x=mp.get(s[l])
            if(x==1){
                mp.delete(s[l])
            }
            else{
                mp.set(s[l],x-1)
            }
            l++
        }
        else{
            if(r==n)break;
            if(mp.has(s[r])){
                let x=mp.get(s[r])
                mp.set(s[r],x+1)
            }
            else{
                mp.set(s[r],1)
            }
            r++;
        }
    }
    return ans
 }