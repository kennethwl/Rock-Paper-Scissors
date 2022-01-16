
// Game input
function computerPlay() {                           //Get random guess from computer
    let number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'Something went wrong';
            break;
    };  
} 

let guessPlayer = '';

// Game logic'

const playRound = (playerSelection, computerSelection) => {         // Game logic for playing 1 round.
    if(playerSelection === computerSelection){
        return 'Tie';
    } 
    else if(playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                
                return'Computer wins!';
                
            }
            return'You win!';
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            
            return'Computer wins!';
        }
        
        return'You win!';
    }
   else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            
            return'Computer wins!';
        }
        
       return'You win!';
    };
}


let playerPoints = 0;                                       // Set variables for keeping score
let computerPoints = 0;

let game = () => {      
    
    if(playerPoints < 5 && computerPoints < 5){
    let playerSelection = guessPlayer;                 
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);      
    getPoints(playerSelection, computerSelection); 
    updateMoves(playerSelection, computerSelection);
    updateScoreboard();
    };
    if(playerPoints === 5 || computerPoints === 5){
        printWinner();
    };
}

// Event handlers

const buttons = document.querySelectorAll('button');
const pageReload = document.querySelector('.page-reload')
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        guessPlayer = button.id;
        game();   
    });
})
pageReload.addEventListener('click', () =>{
    document. location. reload();
});

// Helper functions

const updateScoreboard = () =>{
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

        computerScore.textContent = computerPoints;
        playerScore.textContent = playerPoints;
        
}
const updateMoves = (playerSelection, computerSelection) =>{
    const computerMove = document.querySelector('#computer-move');
    const playerMove = document.querySelector('#player-move');

        playerMove.textContent = `Player throws: ${playerSelection}`;
        computerMove.textContent = `Computer throws: ${computerSelection}`;
}
const getPoints = (playerSelection, computerSelection) =>{
    if(playRound(playerSelection, computerSelection) === 'You win!'){         
        playerPoints++ ;
    }else if(playRound(playerSelection, computerSelection) === 'Computer wins!'){
        computerPoints++; 
    };
}
const printWinner = () =>{
    const winner = document.querySelector('.display-winner');
    winner.style.color = 'red';
    if(playerPoints > computerPoints){
        winner.textContent = 'Player wins!';
       
    }else{
       winner.textContent = 'Computer wins!';
    };
}
