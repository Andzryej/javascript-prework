function playGame(playerInput){ 
    clearMessages();
    function getMoveName(playerMove){
        if(playerMove == 1){
        return 'kamień';
        }
        else if (playerMove==2){
            return "papier";
        }
        else if (playerMove==3){
            return "nozyce";
        }
        else{
        printMessage('Nie znam ruchu o id ' + + '.');
        printMessage("Wybierz pomiedzy  1: kamień, 2: papier, 3: nożyce.")};
}



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);
/*
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
*/
let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);


function displayResult(playerMove,computerMove){
    if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
      else if( computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Remis!');
      }
      else if( computerMove == 'kamień' && playerMove == 'nozyce'){
        printMessage('przegrales!');
      }
      else if( computerMove == 'papier' && playerMove == 'nozyce'){
        printMessage('Ty wygrywasz!');
      }
      else if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Remis!');
      }
      else if( computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Przegrales!');
      }
      else if( computerMove == 'nozyce' && playerMove == 'kamień'){
        printMessage('Wygrales!');
      }
    else if (computerMove=="nozyce" && playerMove=="papier"){
        printMessage("Przegrales!")
    }
     else if (computerMove=="nozyce" && playerMove=="nozyce"){
        printMessage("Remis!")
    }
}
printMessage(displayResult(playerMove,computerMove));
}

let playPaper=document.getElementById("play-paper");
playPaper.addEventListener("click",function(){
 playGame();
})

let playScisors=document.getElementById("play-scisors");
playScisors.addEventListener("click",function(){
  printMessage("");
});

let playRock=document.getElementById("play-rock");
playRock.addEventListener("click",function(){
  printMessage("");
});