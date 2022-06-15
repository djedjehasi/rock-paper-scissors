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
    


const palyerSelection = "rock";
computerSelection = computerPlay();

let palayerWins;
let computerWins;

function palyRound(playerSelection, computerSelection){
    if (palyerSelection === "rock") {
        switch (computerSelection){
            case "rock":
                return "rock and rock are equall, try again!";
                break;
            case "paper":
                computerWins ++;
                return "paper is stronger then rock, you lose!";
                break;
            case "scissors":
                palayerWins ++;
                return "rock is stronger then scissors, you win!";
                break;
            default:
                return "there is an issue!!";
                break;
        }
    } else if(palyerSelection === "paper") {
        return "there is a problem!"
    }

}

console.log(palyRound(palyerSelection, computerSelection))