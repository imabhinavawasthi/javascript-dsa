let arr=[4,3,1,2,6,2]
let n=arr.length

let missing,repeated

for(let i=0;i<n;i++){
    let x=Math.abs(arr[i])
    let index=x-1
    if(arr[index]<0){
        repeated=x
    }
    else{
        arr[index]*=-1
    }
}

for(let i=0;i<n;i++){
    if(arr[i]>0){
        missing=i+1
    }
}

console.log("repeated" ,repeated," and missing ",missing);