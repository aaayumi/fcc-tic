ar game = { 
player: "",
computer: "",
currentPlayer: "",
move: 1,
};

var win = false;

$(document).ready(function(){
   $("#game").hide();
    $("#select").show();
});
function setUp(id){
     if (id === "x"){
        game.player = "x";
        game.computer = "o";
    } else if (id=== "o"){
       game.player = "o";
       game.computer = "x";
    }
    $("#game").show();
    $("#select").hide();
    setCurrentPlayer("computer");
    //alert(game.currentPlayer);
    key(); 
    };

 function key(id){
      if(game.currentPlayer == "player"){
            $("#" + id).html(game.player);
            $("#" + id).removeAttr("onClick");
            gameStatus();
            
            setCurrentPlayer("computer");  
        }
        else if(game.currentPlayer == "computer"){
               $("#"+id).html(game.computer);
               $("#"+id).removeAttr("onClick");
               gameStatus();
            
              setCurrentPlayer("player");
        }
      if(game.currentPlayer == "computer"){
        compMove();
      }
     game.move++;
     gameTie();
     }

    function compMove() {
      var id=Math.floor((Math.random()*9)+1);
      if( $("#"+id).html() !== game.player && $("#"+id).html() !== game.computer){
      key(id);
    } else {
      compMove();
    }
    }
 
   function setCurrentPlayer(curr){
        game.currentPlayer = curr;
    }
    
    
    var gameStatus = function(){
    var curPlayer;
        
        if(game.currentPlayer == "player"){
           curPlayer = game.player;
       } else if (game.currentPlayer = "computer"){
           curPlayer = game.computer;
     }
       
        
  if (($("#1").html()===curPlayer && $("#2").html()===curPlayer && $("#3").html()===curPlayer) 
  || ($("#4").html()===curPlayer && $("#5").html()===curPlayer && $("#6").html()===curPlayer) 
  || ($("#7").html()===curPlayer && $("#8").html()===curPlayer && $("#9").html()===curPlayer) 
  ||($("#1").html()===curPlayer && $("#4").html()===curPlayer && $("#7").html()===curPlayer) 
  ||($("#2").html()===curPlayer && $("#5").html()===curPlayer && $("#8").html()===curPlayer) 
  ||($("3").html()===curPlayer && $("#6").html()===curPlayer && $("9").html()===curPlayer) 
  || ($("#1").html()===curPlayer && $("#5").html()===curPlayer && $("#9").html()===curPlayer)
  || ($("#3").html()===curPlayer && $("#5").html()===curPlayer && $("#7").html()===curPlayer) 
){
  win = true;
  alert(curPlayer + " win!");
  setTimeout(reset, 2000);
};
        
 /* winAlert = function(){
      if(curPlayer === game.player){
          alert("you won");
      } else if (curPlayer === game.computer){
          alert("computer won");
         // clearGame();
      }
  }; */
      
    };
  
// draw 
function gameTie(){
  if(game.move === 10){
    alert("This match is tie");
    setTimeout(reset, 1000);
  }
}

// reset 
function reset(){
  $("td").html("");
  game.move = 1;
  $("td").attr("onClick", "key(this.id)");
  setTimeout(key(), 200);
}