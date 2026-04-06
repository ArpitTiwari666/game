let boxContainer = document.querySelector(".boxes");
let buttons = document.querySelectorAll(".boxes button");
let msg = document.querySelector(".msg");

let gameOver = false;
const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

boxContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.innerText === "" && !gameOver) {
        
        
        e.target.innerText = "X";
        
        e.target.disabled = true;
        
        e.target.style.color="black";
         e.target.style.fontSize="70px";

        if (checkWinner("X")) return;

        computerMove();
    }
});
function computerMove() {
    let empty = [];

    buttons.forEach((btn, i) => {
        
        if (btn.innerText === "") empty.push(i);
         
         btn.style.color="black";
        btn.style.fontSize="70px";

    });

    if (empty.length === 0) {
        msg.innerText = "Draw!";
        
        return;
    }
    for (let pattern of winPatterns) {
        
        let [a, b, c] = pattern;

        let values = [
            buttons[a].innerText,
            buttons[b].innerText,
            buttons[c].innerText
        ];

        if (values.filter(v => v === "O").length === 2 && values.includes("")) {
            let index = [a,b,c].find(i => buttons[i].innerText === "");
            buttons[index].innerText = "O";
            buttons[index].disabled = true;
            checkWinner("O");
            return;
        }
    }

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        let values = [
            buttons[a].innerText,
            buttons[b].innerText,
            buttons[c].innerText
        ];

        if (values.filter(v => v === "X").length === 2 && values.includes("")) {
            let index = [a,b,c].find(i => buttons[i].innerText === "");
            buttons[index].innerText = "O";
            buttons[index].disabled = true;
            checkWinner("O");
            return;
        }
    }

    let z = empty[Math.floor(Math.random() * empty.length)];
    buttons[z].innerText = "O";
    buttons[z].disabled = true;

    checkWinner("O");
}

function checkWinner(player) {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        if (
            buttons[a].innerText === player &&
            buttons[b].innerText === player &&
            buttons[c].innerText === player
        ) {
            highlightWin(a, b, c);
            msg.innerText = player + " wins!";
           
            gameOver = true;
            return true;
        }
    }
    return false;
}

function highlightWin(a, b, c) {
    buttons[a].classList.add("winner");
    buttons[b].classList.add("winner");
    buttons[c].classList.add("winner");
}



document.querySelector(".reset-btn").addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
        btn.classList.remove("winner");
    });

    msg.innerText = "Start the game!";
    gameOver = false;
});