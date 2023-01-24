let arr=[1,3,7,9,12,17,22,30,45]
let x=46

let l=0
let r=arr.length-1

let ans=-1

while(l<=r){
    let mid=parseInt(((l+r)/2))

    if(x==arr[mid]){
        ans=mid
        break
    }
    else if(x>arr[mid]){//right
        l=mid+1
    }
    else{//left
        r=mid-1
    }
}

if(ans!=-1){
    console.log(x,"is present at index",ans)
}
else{
    console.log(x, "is not present")
}