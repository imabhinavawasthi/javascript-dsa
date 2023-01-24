function pow(a,b){
    //base
    if(b==0)return 1

    //recursion
    return a*pow(a,b-1)
}

console.log(pow(5,2));