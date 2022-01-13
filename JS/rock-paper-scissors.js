
const computerPlay = () =>{
    let number = Math.floor(Math.random() * 3);

    switch(number){
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


const playerPlay = () =>{
    let guess = prompt('Enter your guess: rock, paper or scissors');

    guess = guess.toLowerCase();

    if(guess === 'rock' || guess === 'paper' || guess === 'scissors'){
        return guess;
    }else{
        alert('Please enter a valid guess.')
    }
    
}


const playRound = (playerSelection, computerSelection) => {

    
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

    let playerPoints = 0;
    let computerPoint = 0;
    let winner;

    for(let i = 0; i < 5; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        console.log(`You threw: ${playerSelection}`);
        console.log(`The computer threw: ${computerSelection}`);
        

        if(playRound(playerSelection, computerSelection) === 'You win!'){
            playerPoints++
            console.log(`You win! ${playerSelection} beats ${computerSelection} score: ${playerPoints} - ${computerPoint}`);
            
        }else if(playRound(playerSelection, computerSelection) === 'Computer wins!'){
            computerPoint++
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection} score: ${playerPoints} - ${computerPoint}`);
            
        }else{
            console.log(`It's a tie score: ${playerPoints} - ${computerPoint}`)
        }
    }

    if(playerPoints === computerPoint){
        winner = 'no';
        console.log(`End game, the game ended in a draw.`)
    }else if(playerPoints > computerPoint){
        winner = 'player'
        console.log(`End game, ${winner} wins the game!`)
    }else{
        winner = 'computer'
        console.log(`End game, ${winner} wins the game!`)
    }
}

game();
