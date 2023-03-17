/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    const EMPTY = '.'
    const emptyPoints = [];
    const possibleNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
            if (board[i][j] === EMPTY) {
                emptyPoints.push({ row: i, col: j })
            }
        }
    }
    function isValid(num,row,col,board){
        for(let j=0;j<board.length;j++){
            if(board[row][j]==num)return false
        }
        for(let j=0;j<board.length;j++){
            if(board[j][col]==num)return false
        }

        const rowStart = Math.floor(row / 3) * 3
        const colStart = Math.floor(col / 3) * 3
        for (let i = rowStart; i < rowStart + 3; i += 1) {
            for (let j = colStart; j < colStart + 3; j += 1) {
                if (board[i][j] === num) {
                    return false;
                }
            }
        }
        
        return true;
    }
    function backtrack(n){
        if(n>=emptyPoints.length)return true

        const {row,col}=emptyPoints[n]

        for(let i=0;i<possibleNumbers.length;i++){
            if(isValid(possibleNumbers[i],row,col,board)){
                board[row][col]=possibleNumbers[i]
                var next=backtrack(n+1)
                if(next)return true
                board[row][col] = EMPTY;
            }
        }
        return false
    }
    backtrack(0)
    return board

};