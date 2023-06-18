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
        let mp2=new Map();
        for(let i=0;i<n;i++){
            let x=b[i]
            if(mp2.has(x)){
                mp2.set(x,mp2.get(x)+1)
            }
            else{
                mp2.set(x,1)
            }
        }
        for(let i=0;i<n;i++){
            if(mp1.get(a[i])!=mp2.get(a[i])){
                return false;
            }
            if(mp1.get(b[i])!=mp2.get(b[i])){
                return false;
            }
        }
        return true;
    }