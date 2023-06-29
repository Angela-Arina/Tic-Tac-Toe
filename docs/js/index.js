/*The js file is meant to show SUGGESTED arrangement of logic.It is divided into 4:
        -The Button Component(Bewton) 
        -The Grid Component(Frank)
        -The Homepage Component(Dennis) 
        -The Overall Game Logic(Ronnie)
    NB:Please note that you can add or omit any logic you feel free to.This is just a suggested rollout of duties.
    The main aim is forYOUR BRANCH TO SHOW YOU HAVE CONTRIBUTED A LOGIC

    The bulk of the logic is handled by the one responsible for the overall game logic

    Good luck to us all,remember that the merges happen one after the other and each one of us should have an app.jsx file to house our logic.Please note that we all have to create our own branches before merging to main branch
*/


// BUTTON COMPONENT RELATED JS
    // OBTAINING REQUIRED ELEMENTS
const gameStartBtn = document.getElementById("play-game-button");
const resetBtn = document.getElementById("reset-button");
    // SETTING IN-GAME VARIABLES
let gameStart = false;
    // FUNCTION WHEN START BUTTON IS CLICKED
gameStartBtn.addEventListener("click", () =>{
    gameStart = true;
    }
)
    // FUNCTION WHEN REXET BUTTON IS CLICKED
resetBtn.addEventListener("click", () =>{
    gameStart = false;
})

// GRID COMPONENT RELATED JS
    // OBTAINING REQUIRED ELEMENTS
const gameCells = document.querySelectorAll("#cell");
const gameContainer = document.querySelector(".game-container");
    // FUNCTION WHEN A CELL IS UPDATED
function updateCell(cell, index){
    options[index] = chosenPlayer;
    cell.textContent = chosenPlayer;
}

// HOMEPAGE COMPONENT RELATED JS
    // OBTAINING REQUIRED ELEMENTS
const showPlayer = document.getElementById("show-player");
const selectionBox = document.querySelector(".selection-box");
const playerXBtn = document.getElementById("player-x-button");
const playerOBtn = document.getElementById("player-o-button");
    // SETTING IN GAME VARIABLES
let chosenPlayer;
    // FUNCTION TO ALTERNATE PLAYER
function changePlayer(){
    if (chosenPlayer === "O"){
        chosenPlayer = "X"
    }else{
        chosenPlayer = "O"
    }

    showPlayer.innerText = `${chosenPlayer} turn`;
    showPlayer.classList.remove("hidden")
}
    // FUNCTION IF EITHER PLAYER BUTTON IS CLICKED
    playerOBtn.addEventListener("dblclick", () =>{
        chosenPlayer = "O";
        showPlayer.innerText = `YOU ARE PLAYER ${chosenPlayer}`;
        showPlayer.classList.remove("hidden")
    })
    playerXBtn.addEventListener("dblclick", () =>{
        chosenPlayer = "X";
        showPlayer.innerText = `YOU ARE PLAYER ${chosenPlayer}`;
        showPlayer.classList.remove("hidden")
    })

// GAME LOGIC RELATED JS
    // SETTING IN-GAME VARIABLES
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["","","","","","","","",""];
    // FUNCTION WHEN A CELL IS CLICKED
function cellClicked(element){
    element.classList.add("cursor-pointer");
    const cellIndex = element.getAttribute("cellindex");

    if(options[cellIndex] !== "" || !gameStart){
        return;
    }

    updateCell(element, cellIndex);
    checkWinner()
}
    // FUNCTION TO CHECK WINNER
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winningConditions.length; i++){
        const condition = winningConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA === "" || cellB === "" || cellC === ""){
            continue;
        }
        if(cellA === cellB && cellB === cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        showPlayer.classList.remove("hidden");
        showPlayer.textContent = `${chosenPlayer} wins!`;
        gameStart = false;
    }
    else if(!options.includes("")){
        showPlayer.classList.remove("hidden");
        showPlayer.textContent = `Draw!`;
        gameStart = false;
    }
    else{
        changePlayer();
    }    
}