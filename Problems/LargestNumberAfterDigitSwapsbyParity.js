/**
 * @param {number} num
 * @return {number}
 */
 var largestInteger = function(num) {
    var s=num+""
    var n=s.length
    let odd=[],even=[]
    for(let i=0;i<n;i++){
        let x=s[i]-'0'
        if(x%2==0){
            even.push(s[i])
        }
        else{
            odd.push(s[i])
        }
    }
    even.sort((a,b)=>b-a)
    odd.sort((a,b)=>b-a)

    let i=0,j=0

    let ans=""
    for(let ind=0;ind<n;ind++){
        let x=s[ind]-'0'
        if(x%2==0){
            ans=ans+even[i]
            i++
        }
        else{
            ans=ans+odd[j]
            j++
        }
    }
    return parseInt(ans)
};