isAnagram(a, b)
    {
        if(a.length!=b.length){
            return false;
        }
        let n=a.length;
        let mp1=new Map();
        for(let i=0;i<n;i++){
            let x=a[i]
            if(mp1.has(x)){
                mp1.set(x,mp1.get(x)+1)
            }
            else{
                mp1.set(x,1)
            }
        }
        for(let i=0;i<n;i++){
            let x=b[i]
            if(mp1.has(x)==false){
                return false;
            }
            else if(mp1.get(x)==0){
                return false;
            }
            else{
                mp1.set(x,mp1.get(x)-1)
            }
        }
        mp1.forEach((value,key)=>{
            if(value!=0){
                return false
            }
        })
        return true;
    }