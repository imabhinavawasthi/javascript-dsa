function reverse(arr,i,j){

    while(i<j){
        //swap
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--;
    }
    return arr
}

let arr=[1,2,3,4,5,6,7]//5 6 7 1 2 3 4
let k=3

arr=reverse(arr,0,arr.length-1)//complete array

arr=reverse(arr,0,k-1)//first k elements

arr=reverse(arr,k,arr.length-1)//last n-k elements

console.log(arr);