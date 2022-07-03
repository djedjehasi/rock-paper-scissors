// declartion of global scoped variables:

let palyerSelection; 
let computerSelection;
let playerWins = 0;
let computerWins = 0;  
const shapes = ["rock", "paper", "sicssors"]
// function declartions:

// computer selction function
function computerPlay() {
    let hand;
    let shape = Math.floor(Math.random() * 3); // randomised numbers 0 - 2 and value then with one of the hand shape of the game.

    switch (shape){
        case 0:
            hand = shapes[0];
            break;
        case 1:
            hand =shapes[1];
            break;
        case 2:
            hand = shapes[2];
            break;
    }
    return hand;
}

 
// round game function. taking value of prompt and test it agains computer secltion to find the winner and print some statment. 
function playRound(palyerSelection, computerSelection){
    if (palyerSelection.toLowerCase() === computerPlay) {
        return "tie"
    }else if(palyerSelection.toLowerCase() === shapes[0]){
        if (computerPlay == shapes[1]){
            return "Paper is waeker then rock. You lose!"
            computerWins++;
        }else{
            return "Rock is stronger then scissors. You win!"
        }       playerWins++;
    }else if(palyerSelection.toLowerCase() === shapes[1]){
        if (computerPlay === shapes[0]){
            return "Paper is stronger then rock. You win!"
            playerWins++;
        }else{
            return "Scissors is stronger then paper. You lose!"
            computerWins++;
        }
    }else if (palyerSelection.toLowerCase() === shapes[2]){
        if(computerPlay === shapes[0]){
            return "Rock is stronger then scissors. You Lose"
            computerWins++;
        } else{
            return "Scissors is stronger then paper. You win!"
            playerWins++;
        }
    }


}
// game function: 5 runs of play round. 
    function game (){
        for(let i = 0; i < 5; i++){                                         // start of loop;
            palyerChoise = prompt("rock, paper or scissors?");              // askinf for value;
            computerChoice = computerPlay();                                // initilazing computer value;
            playRound(palyerChoise, computerChoice);                        // run round of the game;
            console.log(playRound(palyerChoise, computerChoice));           // print statment of win, lose or tie;
        }                                                                   // end of the loop; 
        if (palayerWins > computerWins){                                    // test who wins and print winner statment;
            console.log("congratulations! you won!")
        } else {
            console.log("to bad, you lose..")
        }
    }
// invoke the game function:
game(); 
