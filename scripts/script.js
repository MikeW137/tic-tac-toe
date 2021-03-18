let turn = 'X'
let turnCount = 0;
let moves = new Array(9);
const boxes = document.querySelectorAll(".box")
const resultArea = document.querySelector(".result");
document.getElementById("resetButton").addEventListener('click', resetBoard);
let xWinCount = 0;
let oWinCount = 0;
let drawCount = 0;

function startGame() {
    boxes.forEach(box => {
        box.addEventListener('click', clicked, {once: true})
        box.addEventListener('mouseover', hover)
        box.addEventListener('mouseout', removeHover)
    })
    turnCount = 0;
    moves = new Array(9);
}
startGame();

function hover() {
    if (turnCount % 2 == 0) {
        this.classList.add('blackhover')
    } else {
        this.classList.add('hoverwhite')
    }
}

function removeHover() {
    this.classList.remove('blackhover')
    this.classList.remove('hoverwhite')
}


function clicked(event) {
    let x = document.createElement('img');
    x.setAttribute('src', "images/X.svg");

    if (turnCount % 2 == 0) {
        // this.appendChild(x)
        this.classList.add('black')
        turn = 'O';
    } else {
        this.classList.add('white')
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
        resultArea.innerHTML = "Result: draw";
        drawCount++;
        document.querySelector(".draws").innerHTML = drawCount

    }
}


function presentWinner(player) {
    if (player == 'O') {
        resultArea.innerHTML = "Result: black wins";
        oWinCount++;
    } else {
        resultArea.innerHTML = "Result: white wins";
        xWinCount++
    }
    console.log(oWinCount)
    document.querySelector(".p1-wins").innerHTML = oWinCount
    document.querySelector(".p2-wins").innerHTML = xWinCount
    boxes.forEach(box => {box.removeEventListener('click', clicked)})
}

function resetBoard() {
    boxes.forEach(box => {
        box.classList.remove('white');
        box.classList.remove('black');
    })
    resultArea.innerHTML = "Result: "
    startGame();
}
