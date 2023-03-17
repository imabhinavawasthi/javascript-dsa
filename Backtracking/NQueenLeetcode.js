/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    var chessBoard = new Array(n);
    for(var i = 0; i < n; i++) {
        chessBoard[i] = new Array(n).fill(".");
    }
    let result=[]
    var isValid=function(row,col){
        for(let j=0;j<n;j++){//same row
            if(chessBoard[row][j]=="Q")return false
        }
        for(let j=0;j<n;j++){//same colomn
            if(chessBoard[j][col]=="Q")return false
        }
        //left diagnol
        let i=row
        let j=col
        while(i>=0&&j>=0){
            if(chessBoard[i][j]=="Q")return false;
            i--
            j--
        }
        //right diagnol
        i=row
        j=col
        while(i>=0&&j<n){
            if(chessBoard[i][j]=="Q")return false;
            i--
            j++
        }
        return true
    }

    var backtrack=function(row){
        if(row>=n){
            result.push([...chessBoard].map(row => row.join('')));
            return
        }

        for(let col=0;col<n;col++){
            if(isValid(row,col)==true){
                chessBoard[row][col]="Q"
                backtrack(row+1)
                chessBoard[row][col]="."
            }
        }
    }
    backtrack(0)
    return result


};