function rec(s,p,i,j,n,m){
    if(j==m){
      if(i==n)return true
      else return false
    }
    var first=false;
    if(i<n&&(s[i]==p[j]||p[j]=='.')){
      first=true
    }
    if((j+1)<m&&p[j+1]=='*'){
      return rec(s,p,i,j+2,n,m)||(first&&rec(s,p,i+1,j,n,m))
    }
    else{
      return (first&&rec(s,p,i+1,j+1,n,m))
    }
  }
  var isMatch = function(s, p) {
    return rec(s,p,0,0,s.length,p.length)
  };