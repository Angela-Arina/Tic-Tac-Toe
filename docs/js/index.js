// OBTAINING REQUIRED ELEMENTS
const playerXBtn = document.getElementById("player-x-button");
const playerOBtn = document.getElementById("player-o-button");
const gameStartBtn = document.getElementById("play-game-button");

// SETTING IN-GAME VARIABLES
let gameStart = false;
let chosenPlayer;

// FUNCTION TO ALTERNATE PLAYER
function changePlayer(){
    if (chosenPlayer === "O"){
        chosenPlayer = "X"
    }else{
        chosenPlayer = "O"
    }
    
    return chosenPlayer
}

// FUNCTION IF EITHER PLAYER BUTTON IS CLICKED
playerOBtn.addEventListener("click", () =>{
    chosenPlayer = "O";
})

playerXBtn.addEventListener("click", () =>{
    chosenPlayer = "X";
})

// FUNCTION WHEN START BUTTON IS CLICKED
gameStartBtn.addEventListener("click", () =>{
    window.open("/docs/game.html", target="_blank")
})