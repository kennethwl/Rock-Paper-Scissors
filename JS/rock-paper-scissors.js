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



let game = () => {

    let winner;

    loopGame();

    if(playerPoints === computerPoints){
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

const loopGame = () =>{

    for(let i = 0; i < 5; i++){

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
      
        playRound(playerSelection, computerSelection);
        
        console.log(`You threw: ${playerSelection}`);
        console.log(`The computer threw: ${computerSelection}`);
        

        if(playRound(playerSelection, computerSelection) === 'You win!'){
            playerPoints++
            console.log(`You win! ${playerSelection} beats ${computerSelection} score: ${playerPoints} - ${computerPoints}`);
            
        }else if(playRound(playerSelection, computerSelection) === 'Computer wins!'){
            computerPoints++
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection} score: ${playerPoints} - ${computerPoints}`);
            
        }else{
            console.log(`It's a tie score: ${playerPoints} - ${computerPoints}`)
        }


       if(playerSelection === 'invalid'){
        i--;}
    }

    

}

let playerPoints = 0;
let computerPoints = 0;



game();

