console.log("welcome to Tic Tac Toe")
let audioturn = new Audio("turnsound.mp3")
let gaemover = new Audio("Tic-Tac-Toe/8-bit-game-over-sound-effect-331435.mp3")
let turn ="X"                  /*yani intital turn x hai*/

//function to change the turn

const changeturn = ()=>{
    return turn === "X"?"0": "X";
}

//function to check win 
const checkwin=()=>{}


//game logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
             audioturn.currentTime = 0;
            audioturn.play();
            turn = changeturn();
            
            checkwin();
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    });
});
