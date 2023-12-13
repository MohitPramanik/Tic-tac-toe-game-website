let boxes = document.querySelectorAll('.box');
let line = document.getElementById('line');
let winner = document.getElementById('winner-name');
let button = document.getElementById('btn');
let turn = 0;
let filled = 0;
let play = 1;

const isWin = () => {

    // rows
    if ((boxes[0].innerHTML == 'X' && boxes[1].innerHTML == 'X' && boxes[2].innerHTML == 'X') ||
        (boxes[0].innerHTML == 'O' && boxes[1].innerHTML == 'O' && boxes[2].innerHTML == 'O')) {
            line.style.display = "block";
            line.style.rotate = "90deg";
            line.style.bottom = "130px";
        return boxes[0].innerHTML;
    }

    else if ((boxes[3].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[5].innerHTML == 'X') ||
        (boxes[3].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[5].innerHTML == 'O')) {
        line.style.display = "block";
        line.style.rotate = "90deg";
        return boxes[3].innerHTML;
    }

    else if ((boxes[6].innerHTML == 'X' && boxes[7].innerHTML == 'X' && boxes[8].innerHTML == 'X') ||
        (boxes[6].innerHTML == 'O' && boxes[7].innerHTML == 'O' && boxes[8].innerHTML == 'O')) {
        line.style.top = "130px"
        line.style.rotate = "90deg";
        line.style.display = "block";
        return boxes[6].innerHTML;
    }

    // columns
    else if ((boxes[0].innerHTML == 'X' && boxes[3].innerHTML == 'X' && boxes[6].innerHTML == 'X') ||
        (boxes[0].innerHTML == 'O' && boxes[3].innerHTML == 'O' && boxes[6].innerHTML == 'O')) {
        line.style.display = "block";
        line.style.left = "54px"
        return boxes[0].innerHTML;
    }

    else if ((boxes[1].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[7].innerHTML == 'X') ||
        (boxes[1].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[7].innerHTML == 'O')) {
        line.style.display = "block";
        line.style.rotate = "0deg";
        return boxes[1].innerHTML;
    }

    else if ((boxes[2].innerHTML == 'X' && boxes[5].innerHTML == 'X' && boxes[8].innerHTML == 'X') ||
        (boxes[2].innerHTML == 'O' && boxes[5].innerHTML == 'O' && boxes[8].innerHTML == 'O')) {
        line.style.display = "block";
        line.style.right = "54px"
        return boxes[2].innerHTML;
    }

    // diagonally
    else if ((boxes[0].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[8].innerHTML == 'X') ||
        (boxes[0].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[8].innerHTML == 'O')) {
        line.style.display = "block";
        line.style.rotate = "-45deg";
        line.style.height = "457px";
        return boxes[0].innerHTML;
    }

    else if ((boxes[2].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[6].innerHTML == 'X') ||
        (boxes[2].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[6].innerHTML == 'O')) {
        line.style.display = "block";
        line.style.rotate = "45deg";
        line.style.height = "457px";
        return boxes[2].innerHTML;
    }
}

const won = () => {
    if (isWin() == 'X') {
        winner.innerHTML = 'X won';
        button.style.display = 'block';
        play = 0;
    }
    else if (isWin() == 'O') {
        winner.innerHTML = 'O won';
        button.style.display = 'block';
        play = 0;
    }
    else if (filled == 9) {
        winner.innerHTML = 'Match tied';
        button.style.display = 'block';
    }
}

Array.from(boxes).forEach((box) => {
    box.onclick = (event) => {
        if(play == 0) {
            event.stopPropagation();
        }
        else if (box.innerHTML != 'O' && box.innerHTML != 'X') {
            if (turn == 0) {
                box.innerHTML = 'O';
                turn = 1;

            }
            else {
                box.innerHTML = 'X';
                turn = 0;
            }
            filled++;
            won();
        }
    }
})

button.onclick = () => {
    location.reload();
}
