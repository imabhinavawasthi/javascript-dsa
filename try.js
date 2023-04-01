let str=""
function ntob(n){
    if(n==0||n==1)return n
    
    let rem=n%2
    str=str+rem
  
    return (ntob(Math.floor(n/2))+str)
}
console.log(ntob(6))