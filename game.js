let hand;

function computerPlay() {
    let shape = Math.floor(Math.random() * 3);
    

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
    


const palyerSelection = "scissors";
computerSelection = computerPlay();

let palayerWins;
let computerWins;

function palyRound(playerSelection, computerSelection){
    if (palyerSelection === "rock") {
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
    } else if (palyerSelection === "paper") {
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
                return "paper is weaker then paper, you lose!";
                break;
            defualt:
            return "there is an issue!!";
        }
    } else if (palyerSelection === "scissors") {
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
    }

}

console.log(palyRound(palyerSelection, computerSelection))