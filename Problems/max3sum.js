let arr = [11, 4, 3, 10, 5, 6, 4]

let currsum=arr[0]+arr[1]+arr[2]

let maxsum=currsum

for(let i=3;i<arr.length;i++){
    currsum+=arr[i]
    currsum-=arr[i-3]

    if(currsum>maxsum)maxsum=currsum
}

console.log(maxsum);





