const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }
    console.log('Enter only rock, paper, scissors');
   }
   
   const getComputerChoice = () =>{
    const choise = ['rock', 'paper', 'scissors'];
    return choise[Math.floor(Math.random() * (choise.length-1))];
   }
   
   const determineWinner = (userChoice, computerChoice) => {
     if(userChoice == computerChoice){
       return 'The game is tie';
     }
     if(userChoice == 'rock'){
       if(computerChoice == 'paper'){
         return 'Computer won';
       }else if(computerChoice == 'scissors'){
         return 'You won!';
       }
     }else if(userChoice == 'paper'){
       if(computerChoice == 'scissors'){
         return 'Computer won';
       }else if(computerChoice == 'rock')
       return 'You won!';
     }else if(userChoice == 'scissors'){
       if(computerChoice == 'paper'){
         return 'You won!';
       }else if(computerChoice == 'rock'){
         return 'Computer won';
       }
     }else if(userChoice == 'bomb'){
       return 'You won!';
     }
   }
   
   //console.log(determineWinner('paper', getComputerChoice()));
   const playGame = () => {
   let userChoice = getUserChoice('bomb');
   let computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
   }
   
   playGame();
   
   
   
   
   
   
   
   
   
   
   