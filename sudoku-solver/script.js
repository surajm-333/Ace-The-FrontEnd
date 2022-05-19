var arr = [[], [], [], [], [], [], [], [], []]
var store=  [[], [], [], [], [], [], [], [], []]
var lony =1;


for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
    	  arr[i][j] = document.getElementById(i * 9 + j);
    }
}


let button = document.getElementById('generate-sudoku')
let solve = document.getElementById('solve')
let check = document.getElementById('chk')

var board = [[], [], [], [], [], [], [], [], []]

console.log(arr)

button.onclick = function () 
{


    var xhrRequest = new XMLHttpRequest()
    xhrRequest.onload = function () {
        var response = JSON.parse(xhrRequest.response)
        console.log(response)
      
        board = response.board
     
        changeBoard(board)
    }
    xhrRequest.open('get', 'https://sugoku.herokuapp.com/board?difficulty=easy')
    
    xhrRequest.send()
}



function changeBoard(board) 
{
		for(var i=0;i<9;i++)
    	{
    		for(var j=0;j<9;j++)
    		{
    			
                arr[i][j].value = " "; arr[i][j].readOnly=false;
                arr[i][j].style.backgroundColor = "white";
    		}
    	}
    	
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] !== 0) {
                   
                arr[i][j].value = board[i][j];
                arr[i][j].readOnly=true;
                arr[i][j].style.backgroundColor = "#ADD8E6";
                store[i][j]=board[i][j];
            }
            else
            {
            	store[i][j]=board[i][j];
            }
        }
    }
}



function isPossible(store, sr, sc, val) {
    for (var row = 0; row < 9; row++) {
        if (store[row][sc] == val) {
            return false;
        }
    }

    for (var col = 0; col < 9; col++) {
        if (store[sr][col] == val) {
            return false;
        }
    }

    var r = sr - sr % 3;
    var c = sc - sc % 3;

    for (var cr = r; cr < r + 3; cr++) {
        for (var cc = c; cc < c + 3; cc++) {
            if (store[cr][cc] == val) {
                return false;
            }
        }
    }
    return true;

}


function solveSudokuHelper(store, sr, sc) 
{
    if (sr == 9) {
       for(var i=0;i<9;i++)
    	{
    		for(var j=0;j<9;j++)
    		{
    			
                arr[i][j].value = store[i][j]; arr[i][j].readOnly=true;
    		}
    	}
        return ;
    }
    if (sc == 9) {
        solveSudokuHelper(store, sr + 1, 0)
        return;
    }

    if (store[sr][sc] != 0) {
        solveSudokuHelper(store, sr, sc + 1);
        return ;
    }

    for (var i = 1; i <= 9; i++) {
        if (isPossible(store, sr, sc, i)) 
        {
            store[sr][sc] = i;
            solveSudokuHelper(store, sr, sc + 1);
            store[sr][sc]=0;
        }
    }

}

function solveSudoku(store) {
    solveSudokuHelper(store, 0, 0)
}


solve.onclick = function () {
    solveSudoku(store)

}

function checkrows(arr)
{
	var crow=[0,0,0,0,0,0,0,0,0]
	var f=0;

	for(var i=0;i<9;i++)
	{
		crow=[0,0,0,0,0,0,0,0,0]

		for(j=0;j<9;j++)
		{
			var num=arr[i][j].value-1
          crow[num]=1;
		}

		for(var j=0;j<9;j++)
		{
          if(crow[j]===0)
          {
          	f=1; 
          	break;
          }
		}
		if(f===1)
			return false;
	}
	return true;
}

function checkcols(arr)
{
	var crow=[0,0,0,0,0,0,0,0,0]
	var f=0;

	for(var i=0;i<9;i++)
	{
		crow=[0,0,0,0,0,0,0,0,0]

		for(j=0;j<9;j++)
		{
         var num=arr[i][j].value-1
          crow[num]=1;
		}

		for(var j=0;j<9;j++)
		{
          if(crow[j]===0)
          {
          	f=1; 
          	break;
          }
		}
		if(f===1)
			return false;
	}
	return true;
}

function minigrid(arr)
{
	var crow=[0,0,0,0,0,0,0,0,0]
    var f=0;

    for(var k=0;k<9;k+=3)
	{
		f=0
		crow=[0,0,0,0,0,0,0,0,0]
		for(var i=k;i<k+3;i++)
		{
			for(var j=0;j<3;j++)
			{
               var num=arr[i][j].value-1
               crow[num]=1;
			}
		}

		for(var j=0;j<9;j++)
		{
          if(crow[j]===0)
          {
          	f=1; 
          }
		}
		if(f===1)
			return false;

   }

   for(var k=0;k<9;k+=3)
	{
		f=0
		crow=[0,0,0,0,0,0,0,0,0]
		
		for(var i=k;i<k+3;i++)
		{
			for(var j=3;j<6;j++)
			{
            var num=arr[i][j].value-1
             crow[num]=1;
			}
		}

		for(var j=0;j<9;j++)
		{
          if(crow[j]===0)
          {
          	f=1; 
          }
		}
		if(f===1)
			return false;

   }

   for(var k=0;k<9;k+=3)
	{
		f=0
		crow=[0,0,0,0,0,0,0,0,0]
		for(var i=k;i<k+3;i++)
		{
			for(var j=6;j<9;j++)
			{
             var num=arr[i][j].value-1
             crow[num]=1;
			}
		}

		for(var j=0;j<9;j++)
		{
          if(crow[j]===0)
          {
          	f=1; 
          	
          }
		}
		if(f===1)
		return false;
    }   
   return true;

}

function sudokuvalid(arr)
{
    if(checkrows(arr)===false)
	return false;

    if(checkcols(arr)===false)
	return false;

    if(minigrid(arr)==false)
    	return false;

    return true;
}

check.onclick = function ()
{
	var f=1;
	if(sudokuvalid(arr)===true)
		f=0;

    	if(f===1) {
    		solveSudoku(store)
    		alert("Wrong. Check Solution:")
         
   }
    		
    		else {alert("Right");
    		
   	          	}		
}






