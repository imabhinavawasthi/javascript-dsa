let arr=[3,2,4,7];
let s=""

let alpha=[""]
for(let i=97;i<=122;i++){
    // let chh=ch+'a';
    s+=String.fromCharCode(i);//abcd
    // console.log(s);
    alpha.push(s);
}

let ans=[]
for(let i=0;i<arr.length;i++){
    ans.push(alpha[arr[i]])
}

console.log(ans);