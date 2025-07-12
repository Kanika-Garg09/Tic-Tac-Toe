console.log("welcome to Tic Tac Toe")
let audioturn = new Audio("turnsound.mp3")            //new Audio is used to add sound in js
let gameover = new Audio("gameend.mp3")
let turn ="X"                  //initial its x turn

//function to change the turn

const changeturn = ()=>{                     //its a arrow func ; we will create arror func in js 
    return turn === "X"?"O": "X";            //agr x ka turn tha to ab 0 ka hai
}

//function to check win 
const checkwin=()=>{}


//game logic

let boxes = document.getElementsByClassName("box");     //it select all the elements of having class box and un sare elements ko "boxes" naam ke variable me store krega

Array.from(boxes).forEach(element => {              
    let boxtext = element.querySelector('.boxtext');     // ye box ke andr X ya O likhega
    
    element.addEventListener('click', () => {                //jab us elements pe click kre yani x ya O pe click kre to niche dia hua kaam krna hai
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
