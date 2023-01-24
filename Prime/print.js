function isPrime(n) {
    let check = true

    for (let i = 2; i * i <= n; i++) {//O(sqrt(n))
        if (n % i == 0) {//i is a factor of n
            check = false
            break
        }
    }
    if (n == 1) {
        return false
    }
    else if (check)
        return true
    else
        return false
}

//print prime numbers till n

let n=50

let primes=[]

for(let i=2;i<=n;i++){//O(N)
    if(isPrime(i)){//O(sqrt(n))
        primes.push(i)
    }
}

console.log(primes);//O(N*sqrt(N))