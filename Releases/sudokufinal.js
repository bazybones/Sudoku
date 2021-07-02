var emptySpot = function(puzzle){
    for(let i = 0; i < puzzle.length; i++){
      for(let j = 0; j < puzzle.length; j++){    
          if(puzzle[i][j] === '0'){
              return [i,j];        
          }
      }
    }
  return false;     
  };
  
  var checkValue = function(puzzle, row, col, num){
      num = num + '';
      for( let j = 0; j < puzzle.length; j++){  
        if(puzzle[row][j] === num && j !== col){ 
            return false;           }
    }
    //
    for( let i = 0; i < puzzle.length; i++){   
      if(puzzle[i][col] === num && i !== row){
          return false;
      }
  }
  // sub-grid
  let boxRow = parseInt(row / 3) * 3;
  let boxCol = parseInt(col / 3) * 3;
  for(let i = boxRow; i < boxRow + 3; i++){
      for(let j = boxCol; j < boxCol + 3; j++){
          if(puzzle[i][j] === num && (i !== row && j !== col)){
              return false;
          }
      }
  }
      return true;
  }
  
  // main function
  var solve = function(puzzle){
      //base condition
      if(!emptySpot(puzzle)){         //If there is no next index inside the puzzle
            return true;
      }
          let puzzleIndexes = emptySpot(puzzle)    
      let row = puzzleIndexes[0];
      let col = puzzleIndexes[1];
      for(let num = 1; num < 10; num++){
          if(checkValue(puzzle, row, col, num)){
                puzzle[row][col] = num +'';   
             // recursively calling the same function(solve) to check the puzzle
             if(solve(puzzle)){    
                 return true;
             }
             //backtrack
             puzzle[row][col] = '0';
          }
      }
        return false;
  };
  
  let matrix =[['0','0','0','2','6','0','7','0','1'],
               ['6','8','0','0','7','0','0','9','0'],
               ['1','9','0','0','0','4','5','0','0'],
               ['8','2','0','1','0','0','0','4','0'],
               ['0','0','4','6','0','2','9','0','0'],
               ['0','5','0','0','0','3','0','2','8'],
               ['0','0','9','3','0','0','0','7','4'],
               ['0','4','0','0','5','0','0','3','6'],
               ['7','0','3','0','1','8','0','0','0']];
  
  console.log(solve(matrix));
  console.table(matrix);