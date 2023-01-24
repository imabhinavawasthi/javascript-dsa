let arr=[12, 34, 10, 6, 40]
//[6,10,12,34,40]
let sum=0

let max=0
let smax=0
let tmax=0

for(let i=0;i<arr.length;i++){//O(N)
    if(arr[i]>max){
        tmax=smax
        smax=max
        max=arr[i]
    }
    else if(arr[i]>smax){
        tmax=smax
        smax=arr[i]
    }
    else if(arr[i]>tmax){
        tmax=arr[i]
    }
}

sum=max+smax+tmax

console.log(max,smax,tmax);