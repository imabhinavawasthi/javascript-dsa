var capitalizeTitle = function(s) {
    var ans=""
    var word=""
    var n=s.length
    for(let i=0;i<n;i++){
        if(s[i]==' '){
            word=word.toLowerCase()
            if(word.length<3){
                ans+=word
                ans+=" "
            }
            else{
                var x=word[0].toUpperCase()+word.slice(1)
                ans+=x
                ans+=" "
            }
            word=""
        }
        else{
            word+=s[i]
        }
    }
    word=word.toLowerCase()
    if(word.length<3){
        ans+=word
    }
    else{
        var x=word[0].toUpperCase()+word.slice(1)
        ans+=x
    }
    return ans
};