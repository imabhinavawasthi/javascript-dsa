var minimumRecolors = function(s, k) {
    var l=0
    var r=0
    var c=0
    for(r=0;r<k;r++){
        if(s[r]=='W')c++
    }
    var n=s.length
    var ans=c
    for(r=k;r<n;r++){
        ans=Math.min(ans,c)
        if(s[r]=='W')c++
        if(s[l]=='W')c--
        l++
    }
    ans=Math.min(ans,c)
    return ans
};