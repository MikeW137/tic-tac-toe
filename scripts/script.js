let turn = 'X'
let turnCount = 0;
let moves = new Array(9);
const boxes = document.querySelectorAll(".box")
document.getElementById("resetButton").addEventListener('click', resetBoard);
document.getElementById("replay").addEventListener('click', resetBoard)
document.getElementById("start").addEventListener('click', newStart)

let xWinCount = 0;
let oWinCount = 0;
let drawCount = 0;
let playerOneChoice = 0;
let playerTwoChoice = 0;
function newStart() {
    document.querySelector("#opening-overlay").style.display = "none";
    playerOneChoice = document.querySelector('input').value;
    playerTwoChoice = document.querySelectorAll('input')[1].value;
    startGame();
}

function startGame() {
    boxes.forEach(box => {
        box.addEventListener('click', clicked, {once: true})
        box.addEventListener('mouseover', hover)
        box.addEventListener('mouseout', removeHover)
    })
    turnCount = 0;
    moves = new Array(9);
    document.querySelector(".overlay").style.display = "none";
}



function hover() {
    if (turnCount % 2 == 0) {
        this.style.backgroundColor = playerOneChoice;
    } else {
        this.style.backgroundColor = playerTwoChoice;
    }
}

function removeHover() {
    this.style.backgroundColor ='#17a567';

}


function clicked(event) {
    this.classList.add('animate__animated', 'animate__pulse')
    let x = document.createElement('img');
    x.setAttribute('src', "images/X.svg");

    if (turnCount % 2 == 0) {
        this.style.backgroundColor = playerOneChoice;
        this.removeEventListener('mouseout', removeHover);
        turn = 'O';
    } else {
        this.style.backgroundColor = playerTwoChoice;
        this.removeEventListener('mouseout', removeHover);
        turn = 'X'
    }
    this.removeEventListener('mouseover', hover)
    moves[event.target.id] = turn;
    turnCount++;
    if (turnCount >= 5) {
        checkWinner()
    }
}


function checkWinner() {
    if (moves[0] !== undefined && moves[0] === moves[1] && moves[1] === moves[2]) {
        presentWinner(moves[0])
     } else if (moves[3] !== undefined && moves[3] === moves[4] && moves[4] === moves[5]) {
        presentWinner(moves[3])
    } else if (moves[6] !== undefined && moves[6] === moves[7] && moves[7] === moves[8]) {
        presentWinner(moves[6])
    } else if (moves[0] !== undefined && moves[0] === moves[3] && moves[3] === moves[6]) {
        presentWinner(moves[3])
    } else if (moves[1] !== undefined && moves[1] === moves[4] && moves[4] === moves[7]) {
        presentWinner(moves[1])
    } else if (moves[2] !== undefined && moves[2] === moves[5] && moves[5] === moves[8]) {
        presentWinner(moves[2])
    } else if (moves[0] === moves[4] && moves[4] === moves[8]) {
        presentWinner(moves[0])
    } else if (moves[2] === moves[4] && moves[4] === moves[6]) {
        presentWinner(moves[2])
    } else if (turnCount == 9) {
        presentWinner(turnCount)

    }
}


function presentWinner(player) {
    if (player == 'O') {
        document.querySelector("#overlay-text").innerHTML = "Player 1 Wins!"
        oWinCount++;
    } else if (player =='X') {
        document.querySelector("#overlay-text").innerHTML = "Player 2 Wins!"
        xWinCount++
    } else {
        drawCount++;
        document.querySelector("#overlay-text").innerHTML = "Draw!"
    }

    document.querySelector(".overlay").style.display = "flex";
    document.querySelector(".p1-wins").innerHTML = oWinCount
    document.querySelector(".p2-wins").innerHTML = xWinCount
    document.querySelector(".draws").innerHTML = drawCount
    boxes.forEach(box => {box.removeEventListener('click', clicked)})
}

function resetBoard() {
    boxes.forEach(box => {
        box.style.backgroundColor ='#17a567';
        box.classList.remove('animate__animated', 'animate__pulse')
    })
    startGame();
}
