function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if (argMoveId==2){
        return "papier";
    }
    else if (argMoveId==3){
        return "nozyce";
    }
    else{
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    printMessage("Wybierz pomiedzy  1: kamień, 2: papier, 3: nożyce.")};
}



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber==2){
    computerMove="papier";
}
else if(randomNumber==3){
    computerMove="nozyce";
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

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
