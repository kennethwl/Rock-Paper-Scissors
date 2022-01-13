
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
    }

} 


const playerPlay = () =>{                       //Get guess from player and check the input if valid or not
    let guess = prompt('Enter your guess: rock, paper or scissors');

    guess = guess.toLowerCase();

    if(guess === 'rock' || guess === 'paper' || guess === 'scissors'){
        return guess;
    }else{
        alert('Please enter a valid guess.');
        return 'invalid';
    }
    
}


// Game logic

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
    }
  

}

let playerPoints = 0;                                       // Set variables for keeping score
let computerPoints = 0;


let game = () => {                                          // Play game 

    let winner;                                             // Set variable for winner

    loopGame();                                             // Loops the game for 5 rounds

    if(playerPoints === computerPoints){                    // Determine winner.
        winner = 'no';
        console.log(`End game, the game ended in a draw.`)
    }else if(playerPoints > computerPoints){
        winner = 'player'
        console.log(`End game, ${winner} wins the game!`)
    }else{
        winner = 'computer'
        console.log(`End game, ${winner} wins the game!`)
    }
}

const loopGame = () =>{                                     // Loop for 5 rounds 

    for(let i = 0; i < 5; i++){                             // Loop 5 times

        let playerSelection = playerPlay();                 // Assign the guess functions to variables
        let computerSelection = computerPlay();
      
        playRound(playerSelection, computerSelection);      // Play 1 round
        
        console.log(`You threw: ${playerSelection}`);               // Log the player guess
        console.log(`The computer threw: ${computerSelection}`);    // Log the computer guess
        

        if(playRound(playerSelection, computerSelection) === 'You win!'){          // Add score to winner of the round and log the result
            playerPoints++
            console.log(`You win! ${playerSelection} beats ${computerSelection} score: ${playerPoints} - ${computerPoints}`);
            
        }else if(playRound(playerSelection, computerSelection) === 'Computer wins!'){
            computerPoints++
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection} score: ${playerPoints} - ${computerPoints}`);
            
        }else{
            console.log(`It's a tie score: ${playerPoints} - ${computerPoints}`)
        }

       if(playerSelection === 'invalid'){                   //Makes sure when given invalid input, game round doesn't count
            i--;
        }
    }   
}

game();                                                     // Call game function

