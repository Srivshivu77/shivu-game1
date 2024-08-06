let score = JSON.parse(localStorage.getItem('score')) ||  {
     wins: 0,
     losses: 0,
     ties : 0,
   };

 

 function playGame(playerMove) {
   let result = '';
   const computerMove = pickComputerMove();

   if(playerMove === 'sessiors'){
     if (computerMove === 'rock') {
       result = 'You lose.';
     } else if (computerMove === 'paper') {
       result = 'You win.';
     } else {
       result = 'Tie.';
     }
   }

  if (playerMove === 'paper') {
       if (computerMove === 'rock') {
       result = 'You win.';
     } else if (computerMove === 'paper') {
       result = 'Tie.';
     } else {
       result = 'You lose.';
     }
  }

  if(playerMove === 'rock'){
       if (computerMove === 'rock') {
       result = 'Tie.';
     } else if (computerMove === 'paper') {
       result = 'You lose.';
     } else {
       result = 'You win.';
     }
  }

  if (result === 'You win.') {
     score.wins++;
  }
  else if (result === 'You lose.') {
     score.losses++;
  }
  else {
   score.ties++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
wins: ${score.wins},losses:${score.losses},ties:${score.ties}`);

 }

 
 function pickComputerMove() {
   const randomNumber = Math.random();
   let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1/3 ) {
     computerMove = 'rock';
   } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
     computerMove = 'paper';
   } else {
     computerMove = 'sessiors';
   }
   console.log(computerMove);
   return computerMove;
 

 }