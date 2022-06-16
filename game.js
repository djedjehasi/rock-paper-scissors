// declartion of global scoped variables:
let hand;
let palyerSelection; 
let computerSelection;
let palayerWins = 0;
let computerWins = 0;  

// function declartions:

// computer selction function
function computerPlay() {
    let shape = Math.floor(Math.random() * 3); // randomised numbers 0 - 2 and value then with one of the hand shape of the game.

    switch (shape){
        case 0:
            hand = "rock";
            break;
        case 1:
            hand = "paper";
            break;
        case 2:
            hand = "scissors";
            break;
    }
    return hand;
}

 
// round game function. taking value of prompt and test it agains computer secltion to find the winner and print some statment. 
function playRound(palyerSelection, computerSelection){
    if (palyerSelection.toLowerCase() == "rock") {
        switch (computerSelection){
            case "rock":
                return "rock and rock are equal, try again!";
                break;
            case "paper":
                computerWins ++;
                return "rock is weaker then paper , you lose!";
                break;
            case "scissors":
                palayerWins ++;
                return "rock is stronger then scissors, you win!";
                break;
            default:
                return "there is an issue!!";
        }
    } else if (palyerSelection.toLowerCase() == "paper") {
        switch (computerSelection){
            case "rock":
                palayerWins ++;
                return "paper is stronger then rock, you win!";
                break;
            case "paper":
                return "paper and paper are equal, try again!"
                break;
            case "scissors":
                computerWins ++;
                return "paper is weaker then scissors, you lose!";
                break;
            defualt:
            return "there is an issue!!";
        }
    } else if (palyerSelection.toLowerCase() == "scissors") {
        switch (computerSelection){
            case "rock":
                computerWins ++;
                return "scissors are weaker then rock, you lose!";
                break;
            case "paper":
                palayerWins ++;
                return "scissors are stronger then paper, you win!";
                break;
            case "scissors":
                return "scissors and scissors are equal, try again!";
                break;
            default:
                return "there is an issue!!"
        }     
    } else {
        return ("you have missed typed!!");
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
