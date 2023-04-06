var merge = function(intervals) {
    let ans=[]
    intervals.sort((a,b)=>a[0]-b[0])
    var n=intervals.length
    for(let i=0;i<n;i++){
        let l=intervals[i][0]
        let r=intervals[i][1]
        if(i<n-1){
            if(r>=intervals[i+1][0]&&r>=intervals[i+1][1]){
                intervals[i+1][0]=intervals[i][0]
                intervals[i+1][1]=intervals[i][1]
            }
            else if(r>=intervals[i+1][0]){
                intervals[i+1][0]=intervals[i][0]
            }
            else{
                ans.push([l,r])
            }
        }
        else{
            ans.push([l,r])
        }
    }
    return ans
};