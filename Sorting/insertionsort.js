function insertionSort(arr,n){
  for(let i=1;i<n;i++){
    var key=arr[i];
    let j=i-1;
    while(j>=0&&arr[j]>key){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=key
  }
  console.log(arr);
}

let arr=[6,3,4,2,5,7,3,2,4,6,4,3,7,89,90,6,5,34,6,67,53,43]
let n=arr.length
insertionSort(arr,n)