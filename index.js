var board = [1,2,3,4,5,6,7,8,9];
var human;
var computer;
var turn = 0; 
var xWin = false;
var oWin = false;

$(document).ready(function(){
    $(".container").hide();
     $("#select").show();
    $(".btn1").click(function(){
    human = "o";
    computer = "x";
    $("#select").hide();
  $(".container").show();
     gameStart();
    }); 
    $(".btn2").click(function(){
   human = "x";
   computer = "o";
   $("#select").hide();
  $(".container").show();
     gameStart();
    });
  
    });


//game function. human play first and computer next 
var gameStart = function(){
  $("td").click(function(){
    if(turn%2 ===0 ){
      $(this).text(human);
      checkBoard();
      checkWin();
    } else {
      compMove();
      checkBoard();
      checkWin();
    }
  });
};

//check available spot 
function checkBoard(board){

}

//computer select indices after human 
compMove = function(){
 
};

//check who wins
checkWin = function(){
//in case of human:
if(  (board[1]==="x" && board[2]==="x" && board[3]==="x")
  || (board[4]==="x" && board[5]==="x" && board[6]==="x")
  || (board[7]==="x" && board[8]==="x" && board[9]==="x")
  || (board[1]==="x" && board[4]==="x" && board[7]==="x")
  || (board[2]==="x" && board[5]==="x" && board[8]==="x")
  || (board[3]==="x" && board[6]==="x" && board[9]==="x")
  || (board[1]==="x" && board[5]==="x" && board[9]==="x")
  || (board[3]==="x" && board[5]==="x" && board[7]==="x")
){
  xWin = true;
  winAlert();
} 
else if((board[1]==="o" && board[2]==="o" && board[3]==="o")
  || (board[4]==="o" && board[5]==="o" && board[6]==="o")
  || (board[7]==="o" && board[8]==="o" && board[9]==="o")
  || (board[1]==="o" && board[4]==="o" && board[7]==="o")
  || (board[2]==="o" && board[5]==="o" && board[8]==="o")
  || (board[3]==="o" && board[6]==="o" && board[9]==="o")
  || (board[1]==="o" && board[5]==="o" && board[9]==="o")
  || (board[3]==="o" && board[5]==="o" && board[7]==="o")
){
  oWin = true;
  winAlert();
};
  
// show alert with winnter info! 
winAlert = function(){
  if("o"===human){
    alert("You won");
    clearGame();
  } else {
    alert("Computer won");
    clearGame();
  }
  
  if("x" ===human){
    alert("You won");
    clearGame();
  } else {
    alert("Computer won");
    clearGame();
  }
};
  
// clear game. 
var clearGame = function(){
  $("td").text("");
};
};