// function drawButtons() {
//   let template = "";
//   for (let i = 0; i < play.length; i++) {
//     const play[i] = play[i];

//   }
// }
// var computerchoice ["rock",
//   "paper",
//   "scissors"
// ];

// var randomchoice = computerchoice[Math.floor(Math.random()*computerchoice.length)];

// document.body.innerHTML = randomchoice;

function play(playersChoice) {
  let computerChoice = "rock";
  if (playersChoice == computerChoice) {
    document.querySelector(`.bayley`).innerHTML = "Tie";
  } else if (playersChoice == "paper") {
    document.querySelector(`.bayley`).innerHTML = "You WIN";
  } else if (playersChoice == "scissors") {
    document.querySelector(`.bayley`).innerHTML = "You Lose!";
  }
}
