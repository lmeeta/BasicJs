let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let message = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".game-btn");

let turn0 = true;

const winingPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    const winner = checkWinner();
    const isDraw = () => {
      return [...boxes].every((box) => box.innerText !== "");
    };
    if (!winner && isDraw()) {
      message.innerText = "It's a draw!";
      msgContainer.classList.remove("hide");
    }
  });
});

const resetGame = () => {
  turn0 = true;
  enableBox();

  msgContainer.classList.add("hide");
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winingPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal1 === posVal3) {
        message.innerText = `Congratulation ${posVal1}`;
        msgContainer.classList.remove("hide");
        disabledBox();
        return posVal1;
      }
    }
  }
  return undefined;
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
