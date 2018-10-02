let turn = 1;
const playerOne = "X";
let playerOneTurn = 1;
let playerOneChoices = [];
const playerTwo = "O";
let playerTwoTurn = 1;
let playerTwoChoices = [];
let top_left = document.getElementsByClassName("top left");
let top_center = document.getElementsByClassName("top center");
let top_right = document.getElementsByClassName("top right");
let middle_left = document.getElementsByClassName("middle left");
let middle_center = document.getElementsByClassName("middle center");
let middle_right = document.getElementsByClassName("middle right");
let bottom_left = document.getElementsByClassName("bottom left");
let bottom_center = document.getElementsByClassName("bottom center");
let bottom_right = document.getElementsByClassName("bottom right");

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    start();
  }
};

function start() {
  let buttons = document.getElementsByClassName("key");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", turnLogic);
  }
}

function turnLogic(event) {
  if (wasUsed()) {
    return;
  } else {
    if (turn % 2 != 0) {
      event.target.innerHTML = playerOne;
      playerOneTurn++;
      playerOneChoices.push(event.target.className);

      if (playerOneTurn > 3) {
        checkIfWin(playerOneChoices);
      }
    } else {
      event.target.innerHTML = playerTwo;
      playerTwoTurn++;
      playerTwoChoices.push(event.target.className);

      if (playerTwoTurn > 3) {
        checkIfWin(playerTwoChoices);
      }
    }
  }

  turn++;
}

function checkIfWin(playerChoices) {
  console.log(playerChoices);
}

function wasUsed() {
  return event.target.innerHTML == "X" || event.target.innerHTML == "O";
}