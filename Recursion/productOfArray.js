function productOfArray(arr){
    //base
    if(arr.length==0)return 1
    //recursion
    return arr[0]*productOfArray(arr.slice(1))//tail
}

console.log(productOfArray([2,3,8,5,1]));