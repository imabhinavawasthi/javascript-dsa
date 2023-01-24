let arr=[5,4,3,2,1]

let l=0;
let r=arr.length-1
let ans=0;
while(l<=r){
    let mid=Math.floor((l+r)/2);
    // console.log(mid);
    if(mid==0){
        if(arr[mid]<0)l=mid+1;
        else{
            ans=0;
            break;
        }
    }
    else if(mid==arr.length-1){
        if(arr[mid]<0){
            ans=arr.length
            break;
        }
        else{
            r=mid-1
        }
    }
    else if(arr[mid]<0){
        ans=mid+1
        l=mid+1
    }
    else r=mid-1

}

console.log(ans);