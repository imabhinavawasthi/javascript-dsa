var isValid = function(s) {
    var n=s.length
    if(s.length%2==1){//odd
        return false
    }
    if(s.length==2){
        if(s[0]=='('&&s[1]==')')return true
        if(s[0]=='{'&&s[1]=='}')return true
        if(s[0]=='['&&s[1]==']')return true
        return false
    }
    for(let i=0;i<n-1;i++){
        if(s[i]=='('&&s[i+1]==')'){
            var ss=s.substring(0,i)+s.substring(i+2)
            return isValid(ss)
        }
        if(s[i]=='{'&&s[i+1]=='}'){
            var ss=s.substring(0,i)+s.substring(i+2)
            return isValid(ss)
        }
        if(s[i]=='['&&s[i+1]==']'){
            var ss=s.substring(0,i)+s.substring(i+2)
            return isValid(ss)
        }
    }
    return false
};