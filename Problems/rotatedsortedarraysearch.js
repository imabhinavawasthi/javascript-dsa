var search = function(arr, x) {
    var n=arr.length
    var l=0
    var r=n-1
    while(l<=r){
        var mid=Math.floor((l+r)/2)
        if(arr[mid]==x){
            return mid;
        }
        else if(arr[mid]>=arr[l]){
            if(x>=arr[l]&&x<arr[mid]){//left
                r=mid-1;
            }
            else{
                l=mid+1
            }
        }
        else{
            if(x>arr[mid]&&x<=arr[r]){
                l=mid+1
            }
            else{
                r=mid-1
            }
        }
    }
    return -1
};