var board = [1,2,3,4,5,6,7,8,9];
var k1;
var k2;
var k3;
var k4;
var k5;
var k6;
var k7;
var k8;
var k9;

var human;
var computer;
var turn = 0; 
var xWin = false;
var oWin = false;

$(document).ready(function(){
    $("#game").hide();
     $("#select").show();
    $(".btn1").click(function(){
    human = "o";
    computer = "x";
    $("#select").hide();
  $("#game").show();
     gameStart();
    }); 
    $(".btn2").click(function(){
   human = "x";
   computer = "o";
   $("#select").hide();
  $("#game").show();
     gameStart();
    });
  
    });


//game function. human play first and computer next 
var gameStart = function(){
  $("td").click(function(){
    if(turn ===0 ){
      $(this).text(human);
      checkBoard();
      checkWin();
      turn ===1;
      compMove();
     checkBoard();
     checkWin();
    }
  });
};

//check available spot 
function checkBoard(board){
  k1 = $("#k1").html();
  k2 = $("#k2").html();
  k3 = $("#k3").html();
  k4 = $("#k4").html();
  k5 = $("#k5").html();
  k6 = $("#k6").html();
  k7 = $("#k7").html();
  k8 = $("#k8").html();
  k9 = $("#k9").html();
}


//computer select indices after human 
compMove = function(){
 if(k5 === ""){
  $("#k5").text(computer);
   turn=0;
 } else if(k1=== human && k2 === human) {
   $("#k3").text(computer);
   turn=0;
 }else{
   $("#k6").text(computer);
   turn=0;
 }
};

//check who wins
checkWin = function(){
//in case of human:
if(  (k1==="x" && k2 ==="x" && k3==="x") 
  || (k4==="x" && k5==="x" && k6==="x")
  || (k7==="x" && k8==="x" && k9==="x")
  || (k1==="x" && k4==="x" && k7==="x")
  || (k2==="x" && k5==="x" && k8==="x")
  || (k3==="x" && k6==="x" && k9==="x")
  || (k1==="x" && k5==="x" && k9==="x")
  || (k3==="x" && k5==="x" && k7==="x")
){
  xWin = true;
  winAlert();
} 
else if((k1==="o" && k2 ==="o" && k3==="o") 
  || (k4==="o" && k5==="o" && k6==="o")
  || (k7==="o" && k8==="o" && k9==="o")
  || (k1==="o" && k4==="o" && k7==="o")
  || (k2==="o" && k5==="o" && k8==="o")
  || (k3==="o" && k6==="o" && k9==="o")
  || (k1==="o" && k5==="o" && k9==="o")
  || (k3==="o" && k5==="o" && k7==="o")
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
  
  if("x" === human){
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