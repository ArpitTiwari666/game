let invi= document.querySelector("#strt");
let headd= document.querySelector(".head");
let res= document.querySelector("#res");
let container= document.querySelector(".container");
let pou= document.querySelector("#pou");
let score=document.querySelector(".scr");
let nume=document.querySelector(".nume");
let snake = [210];
let cells; 
let gameInterval;


invi.addEventListener("click" ,(e)=>{
  invi.style.display="none";
  headd.style.top="3%";
  headd.style.left="5%";
  res.style.display="block";
  container.classList.remove("hidden");
  pou.style.display="block";
  score.style.display = "block";
  nume.style.display = "block";
  createGrid();
  cells = document.querySelectorAll(".cell");
  colorRandomCell();
  drawSnake();
  gameInterval = setInterval(snakemove, 200);
  

  
});
let randomindex;
function colorRandomCell() {
    
    randomindex = Math.floor(Math.random() * cells.length);

    cells[randomindex].style.backgroundColor = "red";
}


function drawSnake() {
  cells.forEach(cell => cell.style.background = "#1e1e1e");

  cells[randomindex].style.background = "red";

  
  snake.forEach(index => {
    cells[index].style.background = "lime";
  });
}

function createGrid() {
  container.innerHTML = "";

  for (let i = 0; i < 400; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell"); 
    container.appendChild(cell);
  
  }
  
};
let pas="False";

pou.addEventListener("click",()=>{
  pas=!pas;
  if(pou.innerText==="Begin!"){
    pou.innerText="Pause";
    pou.style.backgroundColor="#26471D";
    
  } else{
    pou.innerText="Begin!";
    pou.style.backgroundColor="#751400";
  }
  
});
function gameOver() {
  clearInterval(gameInterval);   
  nume.innerText = "Game Over!";  
  res.style.display = "block";
  score.style.display="none";
  nume.style.left = "39%";
  nume.style.color = "#751400";
  nume.style.fontSize = "60px";
  nume.style.top = "3%";
 
}

function checkCollision(head) {
  return snake.slice(1).includes(head);
}

let direction="right";

document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowUp") direction="up";
  if(e.key==="ArrowDown") direction="down";
  if(e.key==="ArrowRight") direction="right";
  if (e.key==="ArrowLeft") direction="left";
});
let count=0;

function snakemove(){
  if(pas) return;
  let head=snake[0];
  if(direction==="up") head=head-20;
  if(direction==="down") head=head+20;
  if(direction==="right") head=head+1;
  if(direction==="left") head=head-1;

  if (direction === "up" && head < 0) {
  head = head + 400;
}

if (direction === "down" && head >= 400) {
  head = head - 400;
}
if (direction === "right" && head % 20 === 0) {
  head = head - 20;
}

if (direction === "left" && (head + 1) % 20 === 0) {
  head = head + 20;
}
 if (checkCollision(head)) {
    gameOver();
    return;
  }

snake.unshift(head);

if(head === randomindex){
    colorRandomCell();
    count++;
    
    nume.innerText=count;
     
  } else {
    snake.pop();  }

drawSnake();

};
 
// function gameover(){
//  if (snake.slice(1).includes(snake[0])) {
//   nume.innerText = "Game Over";
// }

//   }
res.addEventListener("click",()=>{
  resetGame();
})

function resetGame() {
  
  clearInterval(gameInterval);
  snake = [210];
  direction = "right";
  count = 0;
  nume.innerText = count;
  cells.forEach(cell => cell.style.background = "#1e1e1e");
  colorRandomCell();
  score.style.display="block";
  score.style.color="white";
  nume.style.color = "white";
  nume.style.left="52%";
  nume.style.top="4.3%";
  nume.style.fontSize="50px";


  drawSnake();

  gameInterval = setInterval(snakemove, 200);
}
