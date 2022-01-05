function computerPlay() {
    const gameOptions = ["rock", "paper", "scissors"];
    const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerChoice;
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = prompt("Which do you go with: rock, paper or scissors?", "").toLocaleLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return "It's a tie. Play another round.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors."
    } else {
        return `Computer selection: ${computerSelection}, while player selection is obviously wrong: ${playerSelection}. Play again.`;
    }
}