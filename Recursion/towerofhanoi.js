function toi(n,A,C,B){
    //base
    if(n==0)return
    //recursive
    toi(n-1,A,B,C)//n-1 A->B
    console.log(A,"->",C);
    toi(n-1,B,C,A)
}

toi(3,'A','B','C')