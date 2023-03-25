/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let freq={}
    var n=s.length
    let i=0
    let j=0
    var ans=0
    while(j<n){
        if(freq[s[j]]==1){
            freq[s[i]]=0;
            i++;
        }
        else{
            freq[s[j]]=1;
            j++;
        }
        if((j-i)>ans){
            ans=j-i
        }
    }
    return ans
};