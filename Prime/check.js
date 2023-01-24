let n=17

let check=true

for(let i=2;i*i<=n;i++){//O(sqrt(n))
    if(n%i==0){//i is a factor of n
        check=false
        break
    }
}
if(n==1){
    console.log("neither prime nor composite");
}
else if(check)
    console.log("prime");
else
    console.log("not prime");