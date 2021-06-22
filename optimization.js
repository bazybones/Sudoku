//Optimize the solver function for better time complexity


  // main function
  var solve = function(puzzle){
      //base condition
      if(!emptySpot(puzzle)){         //If there is no next index inside the puzzle
            return true;
      }
      //  But if there are some empty cells in the puzzle
      let puzzleIndexes = emptySpot(puzzle)  //  If there are, finding their indexes(eg [0,2])  
      let row = puzzleIndexes[0];
      let col = puzzleIndexes[1];
      for(let num = 1; num < 10; num++){
          if(checkValue(puzzle, row, col, num)){
              // populate with the num 
             puzzle[row][col] = num +'';   // this has to be a string
             // recursively calling the same function(solve) to check the puzzle
             if(solve(puzzle)){    //true(i.e this whole sudoku can be solved in the first place, it is a valid sudoku)
                 return true;
             }
             //backtrack
             puzzle[row][col] = '0';
          }
      }
        return false;
  };