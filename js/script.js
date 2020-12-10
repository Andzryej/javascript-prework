function playGame(playerInput){ 
  function getMoveName(playerMove){
      if(playerMove === 1) return 'kamień';
      else if (playerMove === 2) return "papier";
      else if (playerMove === 3) return "nozyce";
  }

  function displayResult(playerMove,computerMove){

      if((computerMove == 'kamień' && playerMove == 'papier') || ( computerMove == 'papier' && playerMove == 'nozyce') || ( computerMove == 'nozyce' && playerMove == 'kamień')) {
          return 'Ty wygrywasz!';
      }
      else if(playerMove === computerMove) {
          return 'Remis!';
      } else {
          return 'przegrales!';
      }
  }

  // MAIN PROCESS
  clearMessages();

  // determine computer choice
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  // determine player move
  const playerMove = getMoveName(playerInput);

  // show player and computer choices
  printMessage('Twój ruch to: ' + playerMove);
  printMessage('Mój ruch to: ' + computerMove);

  // determine winner and show it
  printMessage(displayResult(playerMove,computerMove));
}

const playPaperBtn = document.getElementById("play-paper");
playPaperBtn.addEventListener("click",function(){
playGame(2);
})

const playScisorsBtn = document.getElementById("play-scisors");
playScisorsBtn.addEventListener("click",function(){
playGame(3);
});

const playRockBtn = document.getElementById("play-rock");
playRockBtn.addEventListener("click",function(){
playGame(1);
});