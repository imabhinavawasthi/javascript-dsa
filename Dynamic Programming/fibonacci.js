let fib=[0,1]

let n=7

for(let i=2;i<=10;i++){
    let x=fib[i-1]+fib[i-2]
    fib.push(x)
}

console.log(fib[n]);
