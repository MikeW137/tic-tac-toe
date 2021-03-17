let currentPlayer = 1;
const boxes = document.querySelectorAll(".box")
document.getElementById("resetButton").addEventListener('click', resetBoard);

function startGame() {
    boxes.forEach(box => {
        box.addEventListener('click', clicked, {once: true})
        box.addEventListener('mouseover', hover)
        box.addEventListener('mouseout', removeHover)
    })
    currentPlayer = 1;
}
startGame();

function hover() {
    if (currentPlayer) {
        this.classList.add('blackhover')
    } else {
        this.classList.add('hoverwhite')
    }
}

function removeHover() {
    this.classList.remove('blackhover')
    this.classList.remove('hoverwhite')
}


function clicked() {
    if (currentPlayer) {
        this.classList.add('black')
        this.removeEventListener('mouseover', hover)
        currentPlayer = 0;

    } else {
        this.classList.add('white')
        this.removeEventListener('mouseover', hover)
        currentPlayer = 1;
    }
    checkWinner()
}


function checkWinner() {
    if (boxes[0].classList.contains("white") && boxes[1].classList.contains("white") && boxes[2].classList.contains("white")) {
        boxes.forEach(box => {box.removeEventListener('click', clicked)})
        presentWinner("white wins!")
    }
}


function presentWinner(color) {
    const resultArea = document.querySelector(".result");
    resultArea.innerHTML = "Result: " + color;

}

function resetBoard() {
    boxes.forEach(box => {
        box.classList.remove('white');
        box.classList.remove('black');
    })

    startGame();
}
