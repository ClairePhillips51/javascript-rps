let wins = 0;
let ties = 0;
let losses = 0;

//Array of options for computer to pick from
let options = ["R", "P", "S"];

let playGame = function() {
    //Ask user for their choice
    let userChoice = window.prompt("Enter R, P, or S:");
    //If user pressed cancel, immediately end function
    if(!userChoice) {
        return;
    }

    //Convert to uppercase to make coparisons easier
    userChoice = userChoice.toUpperCase();

    //Get random index from array to options
    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    //If choices are the same it's a tie
    if(userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

    //Check every win conditions for the player    
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You Win!");

    //If above conditions falied, assume player lost
    } else {
        losses++;
        window.alert("You lost!");
    }

    //Print stats with line breaks
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    //Ask user to play again
    let playAgain = window.confirm("Play again?");

    //if user pressed OK, run the function again
    if (playAgain) {
        playGame();
    }
};

//Run the game for the first time
playGame();