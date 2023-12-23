
function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let randomNumber
    randomNumber = Math.random() * 3;
    let intConvert = Math.floor(randomNumber);
    let computerChoice
    for (let i = 0; i <= intConvert; i++) {
    if (i === 2) {
        computerChoice = scissors;
    }
    else if (i === 1) {
        computerChoice = paper;
    } 
    else if (i === 0) {
        computerChoice = rock;
    }
}
return computerChoice;
}

console.log(getComputerChoice());