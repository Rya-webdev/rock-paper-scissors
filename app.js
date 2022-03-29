const cpuMoveDisplay = document.getElementById("cpu-move");
const userMoveDisplay = document.getElementById("user-move");
const resultDisplay = document.getElementById("result");

const possibleMoves = document.querySelectorAll("button");

let cpuMove;
let userMove;
let result;

possibleMoves.forEach((possibleMoves) =>
  possibleMoves.addEventListener("click", (e) => {
    userMove = e.target.id;
    userMoveDisplay.innerHTML = userMove;

    generateCpuMove();

    getResult();
  })
);

function generateCpuMove() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // 3 == possibleMoves.length
  if (randomNumber === 1) {
    cpuMove = "👊";
  } else if (randomNumber === 2) {
    cpuMove = "✋";
  } else if (randomNumber === 3) {
    cpuMove = "✂️";
  }

  cpuMoveDisplay.innerHTML = cpuMove;
}

function getResult() {
  if (cpuMove === userMove) {
    result = "Draw 🙃!";
  } else if (cpuMove === "👊" && userMove === "✋") {
    result = "You Win 👏!";
  } else if (cpuMove === "✋" && userMove === "✂️") {
    result = "You Win 👏!";
  } else if (cpuMove === "✂️" && userMove === "👊") {
    result = "You Win 👏!";
  } else if (cpuMove === "👊" && userMove === "✂️") {
    result = "You Lost 😕!";
  } else if (cpuMove === "✂️" && userMove === "✋") {
    result = "You Lost 😕!";
  } else if (cpuMove === "✋" && userMove === "👊") {
    result = "You Lost 😕!";
  }

  resultDisplay.innerHTML = result;
}
