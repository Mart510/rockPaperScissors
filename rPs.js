// Rock Paper Scissors in Javascript

// choices
cpuChoice = 'cpu blank' // The computers choice
playerChoice = 'people blank' // The players choice

// result interpret
result = 'Result blank' // The result (Win, lose, draw)
resultText = 'Result text blank' // The string that informs the user

// win lose draw
cpuWin = 'cpuwin blank' // The computer wins
playerWin = 'playerwin blank' // the player wins
draw = 'draw blank' //neither player or cpu wins

// Function called computerPlay that will return randomly 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    let aiPocket = ["Rock", "Paper", "Scissors"]; // 
    let cpuChoice = aiPocket[Math.floor(Math.random()*aiPocket.length)];
   
    document.write(cpuChoice); // prints the cpu choice on the html page
}

// Function called playerPlay asks for input and stores it
function playerPlay(){
    playerChoice = prompt('What do you choose?', "Rock paper scissors");

    switch(playerChoice) { // different ways of writing Rock
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

   document.write(playerChoice); // prints the human choice on the html page
}


/* Function called roundMaster to play a round of Rock Paper Scissors.

Take the two parameters 'playerSelection' and 'computerSelection'

Compare the two, find the result,

Paper beats Rock
Rock beats Scissors
Scissors beats Paper

and then return a string that decalares the winner with a victory message e.g. 'You Lose! Paper beats Rock'

*/
function roundMaster(){
    computerPlay();
    playerPlay();

    switch(result) { // Inteprets the result
    
     // All the rock options
        case ((playerChoice == 'Rock') && (cpuChoice == 'Paper')):
            result = cpuWin
            break;
        case ((playerChoice == 'Rock') && (cpuChoice == 'Scissors')):
            result = playerWin
            break;
        case ((playerChoice == 'Rock') && (cpuChoice == 'Rock')):
        result = draw
        break;

     // All the paper options
        case ((playerChoice == 'Paper') && (cpuChoice == 'Scissors')):
            result = cpuWin
            break;
        case ((playerChoice == 'Paper') && (cpuChoice == 'Rock')):
            result = playerWin
            break;
        case ((playerChoice == 'Paper') && (cpuChoice == 'Paper')):
        result = draw
        break;

     // All the Scissors options
        case ((playerChoice == 'Scissors') && (cpuChoice == 'Rock')):
        result = cpuWin
        break;
        case ((playerChoice == 'Scissors') && (cpuChoice == 'Paper')):
        result = playerWin
        break;
        case ((playerChoice == 'Scissors') && (cpuChoice == 'Scissors')):
        result = draw
        break;        
    }

    switch(resultText) { // Gives the correct message to the player
        case cpuWin:
            resultText = `Sorry ${cpuChoice} beats ${playerChoice}` // Output text if cpu wins e.g Sorry Rock beats Scissors
            break;
        case playerWin:
            resultText = `Awesome ${playerChoice} beats ${cpuChoice}!` // Output text if player wins e.g Awesome Rock beats Scissors!
            break;
        case draw:
            resultText = `That's a tie ${playerChoice} cannot beat itself` // output text if cpu and player pick the same option e.g That's a tie Rock cannot beat itself
            break;
    }

        document.write(result); // prints the result

    document.write(resultText); // prints the result message for the player
}

roundMaster();

// Function called game() which runs roundMaster 5 times in a row, then displays the results of each round and the winner after 5 games using console.log()

//These two functions used for testing and debugging
// computerPlay(); // Returns computer output

// playerPlay(); // Returns the human output
