let userResult = document.getElementById("result-1");
let compResult = document.getElementById("result-2");
let finalResult = document.getElementById("final-result");
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("comp-score");

let userScoreCount = 0;
let compScoreCount = 0;

function clickRock() {
  let userChoice = "Rock";
  let computerChoice = genComputerChoice();
  let showResult = compareResults(userChoice, computerChoice);
  showFinalResult(userChoice, computerChoice, showResult);
  showScore(showResult);
}

function clickPaper() {
  let userChoice = "Paper";
  let computerChoice = genComputerChoice();
  let showResult = compareResults(userChoice, computerChoice);
  showFinalResult(userChoice, computerChoice, showResult);
  showScore(showResult);
}

function clickScissors() {
  let userChoice = "Scissors";
  let computerChoice = genComputerChoice();
  let showResult = compareResults(userChoice, computerChoice);
  showFinalResult(userChoice, computerChoice, showResult);
  showScore(showResult);
}

function genComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function compareResults(userChoice, computerChoice) {
  let result;
  if (userChoice == computerChoice) {
    result = "Tie!";
  } else if (
    (userChoice == "Rock" && computerChoice == "Scissors") ||
    (userChoice == "Scissors" && computerChoice == "Paper") ||
    (userChoice == "Paper" && computerChoice == "Rock")
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }
  return result;
}

function showFinalResult(userChoice, computerChoice, showResult) {
  userResult.innerHTML = `You choose ${userChoice}!`;
  compResult.innerHTML = `Computer choose ${computerChoice}!`;
  finalResult.innerHTML = showResult;
  if (showResult === "You Win!") {
    finalResult.style.color = "green";
  } else if (showResult === "You Lose!") {
    finalResult.style.color = "red";
  } else {
    finalResult.style.color = "black";
  }
  return;
}

function showScore(showResult) {
  if (showResult === "You Win!") {
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  } else if (showResult === "You Lose!") {
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else {
  }
  return;
}
function resetGame() {
  userResult.innerHTML = "";
  compResult.innerHTML = "";
  finalResult.innerHTML = "";
  userScoreCount = 0;
  compScoreCount = 0;
  userScore.innerHTML =0;
  compScore.innerHTML = 0;
}
