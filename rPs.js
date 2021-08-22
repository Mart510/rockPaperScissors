// Rock Paper Scissors in Javascript

// choices
let cpuChoice = 'cpu blank' // The computers choice
let playerInput = 'input Blank' // The players choice
let playerChoice = 'player blank' // the players choice

// win lose draw
let cpuWin = 'cpuwin blank' // The computer wins
let playerWin = 'playerwin blank' // the player wins
let draw = 'draw blank' //neither player or cpu wins

// result interpret
let result = 'Result blank' // The result (Win, lose, draw)
let resultText = 'Result text blank' // The string that informs the user

// Function called computerPlay that will return randomly 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    let aiPocket = ["Rock", "Paper", "Scissors"]; // 
    let cpuChoice = aiPocket[Math.floor(Math.random()*aiPocket.length)];
   
    document.write('CPU Choice is ',cpuChoice); // prints the cpu choice on the html page
}

// Function called playerPlay asks for input and stores it
function playerPlay(){
    playerInput = prompt('What do you choose?', "Rock paper scissors");

    playerInput.toString().toLowerCase(); //This doesn't work for some reason

    if (playerInput.charAt(0) == 'r') {
        playerChoice = 'Rock';
    }
    else if (playerInput.charAt(0) == 'p') {
        playerChoice = 'Paper';
    }
    else if (playerInput.charAt(0) == 's') {
        playerChoice = 'Scissors';
    }

   /* switch(playerChoice) { // different ways of writing Rock
        case 'Rock':
        case 'rock':
        case 'R':
        case 'r':
            playerChoice = 'Rock'
            break;

        case 'Paper': // different ways of writing Paper
        case 'paper':
        case 'P':
        case 'p':
            playerChoice = 'Paper'
            break;

        case 'Scissors': // different ways of writing Scissors
        case 'scissors':
        case 'S':
        case 's':
            playerChoice = 'Scissors'
            break;
    }
*/

   document.write("\n",'Player Choice is ',playerChoice); // prints the human choice on the html page
}


function resultsChecker(){ // figures out who wins the round 
    // First check if it is a draw
        if (playerChoice === cpuChoice) {
            result = draw;
        }

    // All the rock options
        if  ((playerChoice === 'Rock') && (cpuChoice === 'Paper')) {
            result = cpuWin;
            }

        else if
            ((playerChoice === 'Rock') && (cpuChoice === 'Scissors')) {
            result = playerWin;
            }

     // All the paper options
        if ((playerChoice === 'Paper') && (cpuChoice === 'Scissors')) {
            result = cpuWin;
        }
        
        else if ((playerChoice === 'Paper') && (cpuChoice === 'Rock')) {
            result = playerWin;
        }

    // All the Scissors options
        if ((playerChoice === 'Scissors') && (cpuChoice === 'Rock')) {
            result = cpuWin;
        }
        else if ((playerChoice === 'Scissors') && (cpuChoice === 'Paper')) {
            result = playerWin;
        }
}


function resultsPrinter(){ //Results text generator
    
    if (result == cpuWin) {
        resultText = `Sorry ${cpuChoice} beats ${playerChoice}`; // Output text if cpu wins e.g Sorry Rock beats Scissors
        }
    else if (result == playerWin) {
        resultText = `Awesome ${playerChoice} beats ${cpuChoice}!`; // Output text if player wins e.g Awesome Rock beats Scissors!
        }
    else if (result == draw) {
        resultText = `That's a tie ${playerChoice} cannot beat itself`; // output text if cpu and player pick the same option e.g That's a tie Rock cannot beat itself
    }
}

function roundMaster(){ // Plays 1 round of the game
    computerPlay(); // calls the cpu to make it's choice
    playerPlay(); // calls the player to make their choice
    resultsChecker(); // checks the results
    resultsPrinter(); // prints the results
    }

roundMaster();

document.write("\n"); // Creates a new line for the next output - makes the outputs in testing easier to read
document.write(result); // prints the result

document.write("\n"); // Creates a new line for the next output - makes the outputs in testing easier to read
document.write(resultText); // prints the result message for the player


// Function called game() which runs roundMaster 5 times in a row, then displays the results of each round and the winner after 5 games using console.log()

//These two functions used for testing and debugging
// computerPlay(); // Returns computer output

// playerPlay(); // Returns the human output
