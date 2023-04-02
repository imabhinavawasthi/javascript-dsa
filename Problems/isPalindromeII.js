var isPal = function(s){
    var n=s.length
    let i=0
    let j=n-1
    while(i<j){
        if(s[i]!=s[j]){
            return false
        }
        i++
        j--
    }
    return true
}
var validPalindrome = function(s) {
    var n=s.length
    if(isPal(s)==true){
        return true
    }
    let i=0
    let j=n-1
    while(i<j){
        if(s[i]==s[j]){
            i++
            j--
        }
        else{
            var a=""
            var b=""
            for(let k=0;k<n;k++){
                if(k!=i){
                    a+=s[k]
                }
                if(k!=j){
                    b+=s[k]
                }
            }
            if(isPal(a)==true||isPal(b)==true){
                return true
            }
            return false
        }
    }
    return false

};