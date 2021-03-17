let currentPlayer = 1;
const boxes = document.querySelectorAll(".box")
boxes.forEach(box => {
    box.addEventListener('click', clicked, {once: true})
    box.addEventListener('mouseover', hover)
    box.addEventListener('mouseout', removeHover)
})

function hover() {
    if (currentPlayer) {
        this.classList.add('redhover')
    } else {
        this.classList.add('hoverblue')
    }
}

function removeHover() {
    this.classList.remove('redhover')
    this.classList.remove('hoverblue')
}


function clicked() {
    if (currentPlayer) {
        this.classList.add('red')
        currentPlayer = 0;

    } else {
        this.classList.add('blue')
        currentPlayer = 1;
    }
    checkWinner()
}


function checkWinner() {
    if (boxes[0].classList.contains("blue") && boxes[1].classList.contains("blue") && boxes[2].classList.contains("blue")) {
        boxes.forEach(box => {box.removeEventListener('click', clicked)})

    }
}
