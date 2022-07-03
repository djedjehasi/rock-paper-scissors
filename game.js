// declartion of global scoped variables:

let palyerSelection; 
let computerSelection;
let playerWins = 0;
let computerWins = 0;  
const shapes = ["rock", "paper", "scissors"]
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
            hand = shapes[1];
            break;
        case 2:
            hand = shapes[2];
            break;
    }
    return computerSelection = hand;
}

 
// round game function. taking value of prompt and test it agains computer secltion to find the winner and print some statment. 
function playRound(palyerSelection, computerSelection){
    if (palyerSelection.toLowerCase() === computerPlay) {
        return "tie"
    }else if(palyerSelection.toLowerCase() === shapes[0]){
        if (computerSelection === shapes[1]){
            computerWins++;
            return "Paper is waeker then rock. You lose!"
        }else{
            playerWins++;
            return "Rock is stronger then scissors. You win!"
        }     
    }else if(palyerSelection.toLowerCase() === shapes[1]){
        if (computerSelection === shapes[0]){
            playerWins++;
            return "Paper is stronger then rock. You win!"
        }else{
            computerWins++;
            return "Scissors is stronger then paper. You lose!"
        }
    }else if (palyerSelection.toLowerCase() === shapes[2]){
        if(computerSelection === shapes[0]){
            computerWins++;
            return "Rock is stronger then scissors. You lose!"            
        } else{
            playerWins++;
            return "Scissors is stronger then paper. You win!"
        }
    }


}
// game function: 5 runs of play round. 
    function game (){
        for(let i = 0; i < 5; i++){                                         // start of loop;
            let playerChoise = prompt("rock, paper or scissors?");              // askinf for value;
            computerChoice = computerPlay();                                // initilazing computer value;
            playRound(playerChoise, computerChoice);                        // run round of the game;
            console.log(playRound(playerChoise, computerChoice));           // print statment of win, lose or tie;
        }                                                                   // end of the loop; 
        if(playerWins > computerWins){
            console.log("congrts! You'er the WINER!!");
        }
        else{
            console.log("Too bad. you'er LOSER!!");
        }
    }
// invoke the game function:
game(); 
