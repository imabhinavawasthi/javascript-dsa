/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    n=coins.length
    var dp=new Array(n+1)
    for(let i=0;i<=n;i++){
        dp[i]=new Array(amount+1)
    }
    var rec=function(i, coins, amount){
        if(i==0){
            if(amount<0){
                return 1e9;
            }
            else if(amount==0){
                return 0
            }
            else{
                if(amount%coins[0]==0){
                    return amount/coins[0]
                }
                else{
                    return 1e9;
                }
            }
        }
        if(dp[i][amount])
            return dp[i][amount]
        var nottake=rec(i-1,coins,amount)
        var take=1e9
        if(amount>=coins[i]){
            take=rec(i,coins,amount-coins[i])+1
        }
        return dp[i][amount]=Math.min(nottake,take)
    }
    
    if(rec(n-1,coins,amount)==1e9)return -1
    return rec(n-1,coins,amount)
};