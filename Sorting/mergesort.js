// JavaScript program for Merge Sort
 
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)//O(N)
{
    
 
    // Create temp arrays
    var L =[];
    var R =[];
 
    // Copy data to temp arrays L[] and R[]
    for(let i=l;i<=m;i++){
        L.push(arr[i])
    }

    for(let i=m+1;i<=r;i++){
        R.push(arr[i])
    }

    var n1=L.length
    var n2=R.length
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){//O(logN)
    //base
    if(l==r){
        return;//returns recursively
    }
    // recursive
    var m=Math.floor((l+r)/2)
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);//O(N)
}
 
// UTILITY FUNCTIONS
// Function to print an array
function printArray( A, size)
{
    console.log(A);
}
 
 
var arr = [ 12, 8,1 ,5,15,6,9 ];
    var arr_size = arr.length;
 
    console.log("Given array is");
    printArray(arr, arr_size);
 
    mergeSort(arr, 0, arr_size - 1);//O(NlogN)
 
    console.log("Sorted array is");
    printArray(arr, arr_size);