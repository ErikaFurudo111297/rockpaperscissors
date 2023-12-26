let userScore = 1;
let computerScore = 1;

function rockpaperscissors() {
    let counter = 5;
    for (let i = 0; i < counter; i++) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let computerChoiceScissors;
    let computerChoicePaper;
    let computerChoiceRock;
    let computerChoice = getComputerChoice();

    function getComputerChoice() {
        let randomNumber
        randomNumber = Math.random() * 3;
        let intConvert = Math.floor(randomNumber);
        let computerChoice
        for (let i = 0; i <= intConvert; i++) {
        if (i === 2) {
            computerChoice = scissors;
            computerChoiceScissors = true;
        }
        else if (i === 1) {
            computerChoice = paper;
            computerChoicePaper = true;
        } 
        else if (i === 0) {
            computerChoice = rock;
            computerChoiceRock = true;
        }
    }
    return computerChoice;
    }

    function computerChoiceDisplay() {
        if (computerChoiceScissors === true) {
            console.log("The computer chose scissors.");
        } else if (computerChoicePaper === true) {
            console.log("The computer chose paper.");
        } else if (computerChoiceRock === true) {
            console.log("The computer chose rock.");
        }
    }

    let getUserChoice = prompt('Which do you choose; Rock, Paper or Scissors.');
    let userChoice = getUserChoice.toLowerCase();
    function result(a, b) {
        a = computerChoice;
        b = userChoice;
        return a + b;
    }
    let choices = result();


    function game() {
    if (choices === "scissorsscissors" || choices === "paperpaper" || choices === "rockrock") {
        console.log("It's a draw!");
        counter += 1;
    } else if (choices === "scissorspaper" || choices === "paperrock" || choices === "rockscissors") {
        console.log("You lose. Try again.");
    } else if (choices === "scissorsrock" || choices === "paperscissors" || choices === "rockpaper")  {
        console.log("You win!");
    }
    }

    function tabulate() {
        if (userScore === 4) {
            alert("You won the game!");
            return;
        } else if (computerScore === 4) {
            alert("You lost the game. Try again!");
            return;
        }
    }

    function scoring() {
    if (choices === "scissorspaper" || choices === "paperrock" || choices === "rockscissors") {
        computerScore++;
    } else if (choices === "scissorsrock" || choices === "paperscissors" || choices === "rockpaper")  {
        userScore++;
    }
    }


    computerChoiceDisplay();
    scoring();
    game();
    tabulate();
}
}
rockpaperscissors();