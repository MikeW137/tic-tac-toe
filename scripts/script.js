let turn = 'X'
let turnCount = 0;
let moves = new Array(9);
const boxes = document.querySelectorAll(".box")
const resultArea = document.querySelector(".result");
document.getElementById("resetButton").addEventListener('click', resetBoard);

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

    if (turnCount % 2 == 0) {
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
        console.log('first condition')
     } else if (moves[3] !== undefined && moves[3] === moves[4] && moves[4] === moves[5]) {
        presentWinner(moves[3])
        console.log('second condition')
    } else if (moves[6] !== undefined && moves[6] === moves[7] && moves[7] === moves[8]) {
        presentWinner(moves[6])
        console.log('third condition')
    } else if (moves[0] !== undefined && moves[0] === moves[3] && moves[3] === moves[6]) {
        presentWinner(moves[3])
        console.log('fourth')
    } else if (moves[1] !== undefined && moves[1] === moves[4] && moves[4] === moves[7]) {
        presentWinner(moves[1])
        console.log('fifth')
    } else if (moves[2] !== undefined && moves[2] === moves[5] && moves[5] === moves[8]) {
        presentWinner(moves[2])
        console.log('sixth')
    } else if (moves[0] === moves[4] && moves[4] === moves[8]) {
        presentWinner(moves[0])
    } else if (moves[2] === moves[4] && moves[4] === moves[6]) {
        presentWinner(moves[2])
    } else if (turnCount == 9) {
        resultArea.innerHTML = "Result: draw";
    }
}


function presentWinner(player) {
    console.log(player)
    console.log(player == 'O')
    if (player == 'O') {
        resultArea.innerHTML = "Result: black wins";
    } else {
        resultArea.innerHTML = "Result: white wins";
    }
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
