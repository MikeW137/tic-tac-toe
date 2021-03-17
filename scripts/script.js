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
        this.removeEventListener('mouseover', hover)
        moves[event.target.id] = turn;
        turn = 'O';
        turnCount++;

    } else {
        this.classList.add('white')
        this.removeEventListener('mouseover', hover)
        moves[event.target.id] = turn;
        turn = 'X'
        turnCount++
    }
    if (turnCount > 5) {
        checkWinner()
    }
}


function checkWinner() {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        boxes.forEach(box => {box.removeEventListener('click', clicked)})
        presentWinner("white wins!")
    }
}


function presentWinner(color) {
    resultArea.innerHTML = "Result: " + color;

}

function resetBoard() {
    boxes.forEach(box => {
        box.classList.remove('white');
        box.classList.remove('black');
    })
    resultArea.innerHTML = "Result: "
    startGame();
}
