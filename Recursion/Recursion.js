console.log("Recursive");
function rec(i,n){
    //base
    if(i>n)return;

    //recursive
    console.log(i);
    rec(i+1,n);
    
}
rec(1,5)
console.log("Iterative");
let n=5
for(let i=1;i<=n;i++){
    console.log(i);
}
