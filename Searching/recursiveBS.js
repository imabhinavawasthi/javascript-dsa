let arr=[1,3,7,9,12,17,22,30,45]
let n=9
let x=22

function binary_search(l,r){
    //base
    if(l>r){//l<=r
        console.log(x, "is not present");
        return 
    }

    //recursive
    let mid=parseInt((l+r)/2)
    // console.log(mid,l,r);
    if(x==arr[mid]){
        console.log(x, "is present at index",mid);
        return 
    }
    else if(x>arr[mid]){//right
        binary_search(mid+1,r)
    }
    else{//left
        binary_search(l,mid-1)
    }
}

let l=0
let r=arr.length-1

binary_search(l,r)