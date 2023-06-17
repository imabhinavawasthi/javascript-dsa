let arr=[2,0,0,1,0,1,0,2,0,1,2,0,1,2,1,0,2,1,0]
let n=arr.length
let l=0,r=n-1,i=0

while(i<=r){
    if(arr[i]==2){
        //swap with r
        let temp=arr[i]
        arr[i]=arr[r]
        arr[r]=temp
        r--
    }
    else if(arr[i]==0){
        let temp=arr[i]
        arr[i]=arr[l]
        arr[l]=temp
        l++
        i++
    }
    else i++
}
console.log(arr);