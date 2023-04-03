let a=[2,5,8,9]
let b=[3,4,7]

var n=a.length,m=b.length
let c=new Array(m+n)

let i=0,j=0,k=0
while(i<n&&j<m){
    if(a[i]<b[j]){
        c[k]=a[i]
        i++
        k++
    }
    else{
        c[k]=b[j]
        k++
        j++
    }
}

while(i<n){
    c[k]=a[i]
    i++
    k++
}

while(j<m){
    c[k]=b[j]
    k++
    j++
}

console.log(c);

