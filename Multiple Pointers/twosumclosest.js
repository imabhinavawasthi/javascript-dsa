var a=[1,4,7,9]//n
var n=a.length
var b=[10,20,30,40]//m
var m=b.length

var target=40

let i=0
let j=m-1

let x=a[i]
let y=b[j]

while(i<n&&j>=0){
    let diff=Math.abs((a[i]+b[j])-target)
    if(diff<(Math.abs((x+y)-target))){
        x=a[i]
        y=b[j]
    }
    if(a[i]+b[j]==target){
        break
    }
    else if(a[i]+b[j]>target){
        j--
    }
    else{
        i++
    }
}

console.log(x,y);

