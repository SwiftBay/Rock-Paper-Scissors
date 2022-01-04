function computerPlay() {
    const gameOptions = ["rock", "paper", "scissors"];
    const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerChoice;
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = prompt("Which do you go with: rock, paper or scissors?", "");
    computerSelection = computerPlay();
}