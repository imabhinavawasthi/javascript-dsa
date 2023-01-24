let arr=[5,1,2,8,7,6,4]

let prefixsum=[]

prefixsum.push(arr[0])

for(let i=1;i<arr.length;i++){
    let x=prefixsum[i-1]+arr[i]
    prefixsum.push(x)
}

console.log(prefixsum);