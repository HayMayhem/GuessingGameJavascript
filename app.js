//This is a number guessing game
const userName = prompt("What is your name?");

console.log(userName, "Welcome to the game!");

//
function play() {    //Debugger;
    //Let secretNumber = Math.floor((Math.random() *10) +1)
    let secretNumber = 5;

    //binary search
    while (true) {
        //console.log("SecretNumber", secretNumber);
        const guess = prompt("Guess a number between 1 and 10");

        if (guess === null) {
            alert("Goodbye!");
        }
        const numGuess = Number(guess);
        console.log("NumGuess");

        if (Number.isNaN(numGuess)) {
            alert(`Please Enter a valid number`);
            //if number is less than the generated number
        } else if (numGuess < secretNumber) {
            alert(`Sorry ${userName}, guess higher`);
            // if the number is greater than the generated number
        } else if (numGuess > secretNumber) {
            alert(`Sorry ${userName}, guess lower`);
        } else {
            alert(`Correct! ${secretNumber}, was the number!`);
            break; //Exit the loop when the user guess correctly
        }
    }
}

play();