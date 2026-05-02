let userScore = 0;
let computerScore = 0;

let compChoice = rock;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
cScore = document.querySelector("#computer-score");
uScore = document.querySelector("#user-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

const drawGame = () => {
  msg.innerHTML = "It's a draw! Play Again";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore += 1;
    uScore.innerHTML = userScore;
  } else {
    msg.innerHTML = `You lose!  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    computerScore++;
    cScore.innerHTML = computerScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp choice is paper,scissor
      compChoice === "paper" ? (userWin = false) : (userWin = true);
    } else if (userChoice === "paper") {
      //comp choice is scissor,rock
      compChoice === "scissor" ? (userWin = false) : (userWin = true);
    } else if (userChoice === "scissor") {
      //comp choice is rock,paper
      compChoice === "rock" ? (userWin = false) : (userWin = true);
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const winner = () => {
  if (userChoice == "rock" && compChoice == "paper") {
    computerScore++;
  } else if (userChoice == "paper" && compChoice == "scissor") {
    computerScore++;
  } else if (userChoice == "scissor" && compChoice == "rock") {
    computerScore++;
  } else {
    userScore++;
  }
};
