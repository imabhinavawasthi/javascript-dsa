function sieve(n){

	var prime=new Array(n+1)

	for(let i=0;i<n+1;i++){
		prime[i]=true
	}

	prime[0]=false
	prime[1]=false

	for(let i=2;i*i<=n;i++){
		if(prime[i]==true){
			for(let j=i*i;j<=n;j+=i){//multiples
				prime[j]=false
			}
		}
	}

	let arr=[]
	for(let i=2;i<=n;i++){
		if(prime[i]){
			arr.push(i)
		}
	}

	console.log(arr);
}

sieve(500)



