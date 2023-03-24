var n=s.length
    let table = new Array(n);
    for(let i = 0; i < n; i++)
    {
        table[i] = new Array(n);
    }
    for(let i=0;i<n;i++){
        table[i][i]=true
        ans=s.substring(i,i+1)
    }
    for(let i=0;i<n-1;i++){
        if(s[i]==s[i+1]){
            table[i][i+1]=true
            ans=s.substring(i,i+2)
        }
    }
    
    for(let l=3;l<=n;l++){
        for(let i=0;i<=n-l;i++){
            var j=i+l-1;
            if(s[i]==s[j]&&table[i+1][j-1]==true){
                table[i][j]=true
                ans=s.substring(i,j+1)
            }
        }
    }
    return ans