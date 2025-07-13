console.log("welcome to Tic Tac Toe")
let audioturn = new Audio("turnsound.mp3")            //new Audio is used to add sound in js
let gameover = new Audio("gameend.mp3")
let turn ="X"                  //initial its x turn
let isgameover = false

//function to change the turn

const changeturn = ()=>{                     //its a arrow func ; we will create arror func in js 
    return turn === "X"?"O": "X";            //agr x ka turn tha to ab 0 ka hai
}

//function to check win 
const checkwin=()=>{
    let boxtext = document.getElementsByClassName('boxtext')              // all X and 0 box saved in boxtexts variable
    let wins = [
        [0,1,2],                      //horizontal wins from 0 to 8
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON"
            isgameover = true
        }

    })
}


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
            if(!isgameover)
                {
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;     // ye info hi info ko change krega
            }
        }
    });
});
