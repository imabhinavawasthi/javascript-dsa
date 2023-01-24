let arr=[1,2,3,4,5]

let i=0//first
let j=arr.length-1//last

while(i<j){
    //swap
    arr[i]=arr[i]+arr[j]
    arr[j]=arr[i]-arr[j]
    arr[i]=arr[i]-arr[j]
    i++;
    j--;
}

console.log(arr);