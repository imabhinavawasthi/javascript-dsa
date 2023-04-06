let n=17

let prime=true

for(let i=2;i*i<=n;i++){//O(sqrt(N))
    if(n%i==0){
        prime=false
        break
    }
}

if(prime==true){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}
