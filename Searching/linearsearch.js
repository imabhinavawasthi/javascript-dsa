//linear search

let arr=[2,4,78,34,23,46,32,67,40,78,45,23,6,3]

let x=460
let ans=-1

for(let i=0;i<arr.length;i++){//O(N)
    if(arr[i]==x){
        ans=i
    }
}

if(ans!=-1){
    console.log(x,"is present at index",ans)
}
else{
    console.log(x, "is not present")
}
