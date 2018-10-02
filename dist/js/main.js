let turn = 1;
const playerOne = "X";
let playerOneTurn = 1;
let playerOneChoices = [];
const playerTwo = "O";
let playerTwoTurn = 1;
let playerTwoChoices = [];
const top_left = document.getElementsByClassName("top left");
const top_center = document.getElementsByClassName("top center");
const top_right = document.getElementsByClassName("top right");
const middle_left = document.getElementsByClassName("middle left");
const middle_center = document.getElementsByClassName("middle center");
const middle_right = document.getElementsByClassName("middle right");
const bottom_left = document.getElementsByClassName("bottom left");
const bottom_center = document.getElementsByClassName("bottom center");
const bottom_right = document.getElementsByClassName("bottom right");
const winConditions = [[top_left, top_center, top_right], [middle_left, middle_center, middle_right], [bottom_left, bottom_center, bottom_right], [top_left, middle_left, bottom_left], [top_center, middle_center, bottom_center], [top_right, middle_right, bottom_right], [top_left, middle_center, bottom_right], [top_right, middle_center, bottom_left]];

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
  if (wasUsed(event)) {
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

function wasUsed(event) {
  return event.target.innerHTML == "X" || event.target.innerHTML == "O";
}