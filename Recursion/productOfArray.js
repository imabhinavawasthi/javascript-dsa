function rec(arr,i){
    //base
    if(i==arr.length)return 1

    //recursive
    return arr[i]*rec(arr,i+1)
}

console.log(rec([9,1,8,5],0));

//O(n)