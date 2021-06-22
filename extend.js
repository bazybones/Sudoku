//logic to check and solve the row, column, sub-grid blocks

function emptySpot(puzzle) {                  //takes the 2D array as the parameter 
    for (var i = 0; i < 9; i++) {            // checking the row for the empty vals which is denoted by 0 
        for (var j = 0; j < 9; j++) {       //nested-loop checking the col for for empty vals
            if (puzzle[i][j] === 0)        //checks if the arrays row=i & col=j === 0 (definite value) 
            return [i, j];                //returns the index of the two empty cells in r                
        }
    }
    return [-1, -1];    //.when the puzzle is full and there is no empty position, the function will stop

}


function checkRow(puzzle, row, value){             //function taking puzzle,row and value as parm
    for(var i = 0; i < puzzle[row].length; i++) { // loop that traverses through the row
        if(puzzle[row][i] === value) {           //checks if the row already contains the number 
            return false;                       //^if it does it returns false
        }
    }
   
    return true;                              //if it does not (valid) it returns true
}
// Repeating the same block as the previous one for Rows but replacing it with Columns
function checkcol(puzzle, col, value){
    for(var i = 0; i < puzzle.length; i++) {
        if(puzzle[i][col] === value) {
            return false;
        }
    }

    return true;
};


//subgrid for the the sudoku puzzle 
function checkSquare(puzzle, row, col, value){         //passing parameters
    boxRow = Math.floor(row / 3) * 3;                 //dividing the 9x9 puzzle horizontally into 3 parts
    boxCol = Math.floor(col / 3) * 3;                 //dividing the 9x9 puzzle vertically into 3 parts
    // sub-grid iteration
    for (var r = 0; r < 3; r++){                     //checking the sub-grid for 3 rows at a time
        for (var c = 0; c < 3; c++){                //checking the sungrid of for 3 columns at a time
            if (puzzle[boxRow + r][boxCol + c] === value)  //checks if r&c of 3x3 grid already contains the number 
                    return false;                    // if it does reurns false
        }
    }

    return true;                      // if it exists then returns true
};
// this function checks if the values of all the rows,column,subgrid are repeated
function checkValue(puzzle, row, col, value) {
    if(checkRow(puzzle, row, value) &&          // comparsion of all the funcs
      checkcol(puzzle, col, value) &&
      checkSquare(puzzle, row, col, value)) {
        return true;                               
    }
    
    return false;  


    
};

// main function
function solve(puzzle) {                 
    let emptySpot = emptySpot(puzzle);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1){
        return puzzle;
    }

    for(let num = 1; num<=9; num++){
        if (checkValue(puzzle, row, col, num)){
            puzzle[row][col] = num;
            solve(puzzle);
        }
    }

    if (emptySpot(puzzle)[0] !== -1)
        puzzle[row][col] = 0;

    return puzzle;
}

