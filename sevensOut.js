const prompt = require('prompt-sync')();


//Prompt user to input how many players are playing.
//Get the amount of players playing: let players = x;
//Have a for loop loop x amount of times.
//Each loop will basically add a new player object to the array.

//Global Variables:
//User inputs players

let players = prompt('How many players?');
let targetScore = prompt('What do you want your target score to be?');
let playersArray = [];
let endGame = true;
let currentPlayer = -1;

console.log(players);
console.log(targetScore);

for (let i = 1; i < Number(players) + 1; i++) {
    let playerObject = {
        name: `player ${i}`,
        totalScore: 0,
        roll: 0,
    }
    playersArray.push(playerObject);
}
// How to make prompts appear on our terminal
function randomNumberGenerator(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
};


function checkScores() {
    for (let player of playersArray) {
        if (player.totalScore >= targetScore) {
            endGame = false;
            console.log(`Player ${Number(currentPlayer) + 1} is the Winner!!!!!!!!!!!!!!`);
            console.log('\n\n\n\n\n\n');
        }
    }
}

function playerTurn() {
    currentPlayer += 1;
    if (currentPlayer >= playersArray.length) {
        currentPlayer = 0;
    }
}
//Where the game Starts
while (endGame == true) {
    //
    let endCurrentPlayerTurn = false;
    let turnTally = 1;

    //Check to see whos turn it is


    //Getting the current player's object from the playersArray:
    // let currentPlayerObject = playersArray[currentPlayer];
    // console.log(currentPlayerObject);
    // let currentPlayerScore = currentPlayerObject.totalScore;
    // console.log(currentPlayerScore);
    //Have player roll the dice:
    //Add dice sum to the currentPlayerScore:
    //If the dice sum = 7; Break out of loop.
    playerTurn();


    //While that contains all the rolls for the current player:
    while (endCurrentPlayerTurn == false) {
        //Log the player's current sum 
        // console.log('Current Player Score:', currentPlayerScore);
        //log current Tally
        console.log('--------------------------------------------');
        prompt(`Player ${Number(currentPlayer) + 1}'s turn. Roll the Dice`);
        console.log('Turn Tally:', turnTally);

        //Roll the dice, 
        let tempRoll;
        diceOne = randomNumberGenerator(1, 6);
        diceTwo = randomNumberGenerator(1, 6);
        console.log('First Dye:', diceOne);
        console.log('Second Dye:', diceTwo);
        if (diceOne === diceTwo) {
            tempRoll = (diceOne + diceTwo) * 2
            console.log('Hey you rolled a:', tempRoll);
        } else if (diceOne + diceTwo === 7) {
            endCurrentPlayerTurn = true;
            tempRoll = 0;
            console.log(`You rolled a 7, you get no more points`);
        } else {
            tempRoll = diceOne + diceTwo
            console.log('Hey you rolled a:', tempRoll);
        }
        //Add the dice sum to the CurrentPlayerScore.
        playersArray[currentPlayer].totalScore += tempRoll;
        console.log('Total Score:', playersArray[currentPlayer].totalScore);
        //+1 current roll
        console.log('--------------------------------------------\n\n');
        turnTally += 1;
    }

    //Run a function to check if a player has won
    checkScores();
}