// Rock Paper Scissors in Javascript

// choices
let cpuChoice = 'cpu blank' // The computers choice
let playerInput = 'input Blank' // The players choice
let playerChoice = 'player blank' // the players choice

// win lose draw
let cpuWin = 'cpuwin' // The computer wins
let playerWin = 'playerwin' // the player wins
let draw = 'draw' //neither player or cpu wins

// result interpret
let result = 'Result blank' // The result (Win, lose, draw)
let resultText = 'Result text blank' // The string that informs the user
let grandMasterText = 'Grand master blank' // This string contains the overall winner

// scoreboard
let scoreCount = 0 // Default value, CPU win = -1, Player win = +1

// Function called computerPlay that will return randomly 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    let aiPocket = ['Rock', 'Paper', 'Scissors'];  
    cpuChoice = aiPocket[Math.floor(Math.random()*aiPocket.length)]; // Cpu choice now failing
   
    // document.write('CPU Choice is ',cpuChoice); // prints the cpu choice on the html page
}

// Function called playerPlay asks for input and stores it
function playerPlay(){
    playerInput = prompt('What do you choose?', "Rock paper scissors");

    playerInput = playerInput.toString();
    playerInput = playerInput.toLowerCase(); // Makes the input lower case for below if and else

    if (playerInput.charAt(0) == 'r') { // Only need to check first character
        playerChoice = 'Rock';
    }
    else if (playerInput.charAt(0) == 'p') {
        playerChoice = 'Paper';
    }
    else if (playerInput.charAt(0) == 's') {
        playerChoice = 'Scissors';
    }

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

function resultsPrinter(){ // Results text generator
    
    if (result === cpuWin) {
        resultText = `Sorry ${cpuChoice} beats ${playerChoice}`; // Output text if cpu wins e.g Sorry Rock beats Scissors
        }
    else if (result === playerWin) {
        resultText = `Awesome ${playerChoice} beats ${cpuChoice}!`; // Output text if player wins e.g Awesome Rock beats Scissors!
        }
    else if (result === draw) {
        resultText = `That's a tie ${playerChoice} cannot beat itself`; // output text if cpu and player pick the same option e.g That's a tie Rock cannot beat itself
    }
    document.write(resultText);
}

function scoreCounter(){ // Counts the score from each round of play
     
    if (result === cpuWin) {
        scoreCount = scoreCount - 1; // reduces score int by 1
    }
    else (result === playerWin) 
        scoreCount = scoreCount + 1; // increaces score int by 1
    
}

function roundMaster(){ // Plays 1 round of the game
    computerPlay(); // calls the cpu to make it's choice
    playerPlay(); // calls the player to make their choice
    resultsChecker(); // checks the results
    resultsPrinter(); // prints the results
    scoreCounter(); // counts the score
}

function game(){ // plays roundMaster 5 times, records each result then declares the winner

    for (let i = 0; i <5; i++) {
        roundMaster();
    }
    
    if (scoreCount >0) {
        grandMasterText = 'Well done, you are the champion!';
    }
    else (scoreCount <=0 )
        grandMasterText = 'Sorry the Computer is the champion!';
    
    document.write(grandMasterText);
        
}

game();

// Debug print calls
// now works document.write('CPU Choice is ',cpuChoice);
// now works document.write("\n"); // Creates a new line for the next output - makes the outputs in testing easier to read
// now works document.write('Player Choice is ',playerChoice); // prints the human choice on the html page
// now works document.write("\n"); // Creates a new line for the next output - makes the outputs in testing easier to read
// now works document.write(result); // prints the result
// now works document.write("\n"); // Creates a new line for the next output - makes the outputs in testing easier to read
// now works document.write(resultText); // prints the result message for the player
// now works document.write(scoreCount); // prints current score

// Function called game() which runs roundMaster 5 times in a row, then displays the results of each round and the winner after 5 games using console.log()

//These two functions used for testing and debugging
// computerPlay(); // Returns computer output

// playerPlay(); // Returns the human output
