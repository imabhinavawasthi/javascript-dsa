// var a="abc"
// var b="wxyz"
// console.log(a,b);
// [a,b]=[b,a]
// console.log(a,b);

var a="abc"
var b="wxyz"

console.log(a,b);

a=a.concat(b)
b=a.slice(0,a.length-b.length)

a=a.slice(b.length)

console.log(a,b);