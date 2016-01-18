////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   return (move) ? (move) : getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move) ? (move) : randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    console.log(playerMove,computerMove)
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("It's a Tie!")
    }
    if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
            console.log("Player Wins! Rock crushes Scissors!");
        }
        if (computerMove === "paper") {
            winner = "computer";
            console.log("Player Loses! Paper covers Rock!");
        }
    }
    if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
            console.log("Player Wins! Paper covers Rock!");
        }
        if (computerMove === "scissors") {
            winner = "computer";
            console.log("Player Loses! Scissors cuts Paper!");
        }
    }
    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
            console.log("Player Loses! Rock crushes Scissors!");
        }
        if (computerMove === "paper") {
            winner = "player";
            console.log("Player Wins! Scissors cuts Paper!");
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        console.log("Player choses " + playerMove + " vs. the Computer's " + computerMove + "!");
        if (winner === "computer") {
            computerWins ++;
            console.log("Player Loses! Player is currently at " + playerWins + " and the Computer at " + computerWins + "!");
        }   else if (winner === "player") {
                playerWins ++;
                console.log("Player wins! Player is currently at " + playerWins + " and the Computer at " + computerWins + "!");
        }   else if (winner === "tie"){
                console.log("Tie game! Player is currently at " + playerWins + " and the Computer at " + computerWins + "!");
        }
    }
    return [playerWins, computerWins];
}

