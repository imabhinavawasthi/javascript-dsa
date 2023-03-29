var reverseStr = function(str, k) {
    let i=0
    var s=str.split("")
    var n=s.length
    while(i<n){
        let l=i
        let r=i+k-1
        if(r>=n)r=n-1
        while(l<r){
            s[l]=s[l].concat(s[r])
            s[r]=s[l].slice(0,s[l].length-s[r].length)
            s[l]=s[l].slice(s[r].length)
            l++
            r--
        }
        i+=2*k
    }
    return s.join("")
};