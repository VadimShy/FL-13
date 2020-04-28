let gameStart = confirm('Do you want to play a game?');

if (gameStart === true) {

  let minNumber = 0;   
  let maxNumber = 5;
  let counter = 0;
  let randomlyChoosenNumber = Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
  console.log(randomlyChoosenNumber);
  let strChooseNumber = `Choose a roulette pocket number from 0 to ${maxNumber}\n`;
  let attempts = 3;
  let attemptsNumber = 3; 
  let strAttemptsLeft = `Attempts left: ${attemptsNumber}\n`;  
  const xDouble = 2;
  let prizeFirstTry = 100; 
  let prizeFirstTryDouble = 200;
  let maxRangeNumber = 5;
  let totalPrize = 0;
  let strTotalPrize = `Total prize: ${totalPrize}\n`;
  let strPossiblePrize = `Possible prize + on current attempt: ${prizeFirstTry}$\n`;
  let startGameWindow = `Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${attemptsNumber}
Total prize: ${totalPrize}
Possible prize on current attempt: ${prizeFirstTry}$`;
  let chooseNumber = parseInt(prompt(startGameWindow, ''));
  if (chooseNumber === randomlyChoosenNumber) {
    alert(`Congratulation, you won! Your prize is: ${prizeFirstTry}$`);
    let playAgain = confirm('Do you want to play again ?');
    if (playAgain === true) {
      maxNumber += maxRangeNumber;
      randomlyChoosenNumber = Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
      totalPrize = prizeFirstTry;
      startGameWindow = `Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${attemptsNumber}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prizeFirstTryDouble}$`;
      chooseNumber = parseInt(prompt(startGameWindow, ''));
      if (chooseNumber === randomlyChoosenNumber) {
          alert(`Congratulation, you won! Your prize is: ${prizeFirstTry + prizeFirstTryDouble}$`);
      }
    }else {
      alert('Thank you for your participation. Your prize is: ' + prizeFirstTry + '$');
    }
  }
  while (chooseNumber !== randomlyChoosenNumber) {
    counter++;

    if (counter > attempts - 1) {
      alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
      break
    }
    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
    let playAgain = confirm('Do you want to play again ?');

    if (playAgain === true){
    prizeFirstTry = prizeFirstTry / xDouble;  
    attemptsNumber = attemptsNumber - 1;
    strAttemptsLeft = 'Attempts left: ' + attemptsNumber + '\n';
    strPossiblePrize = 'Possible prize on current attempt: ' + prizeFirstTry + '$' + '\n'; 
    chooseNumber = parseInt(prompt(strChooseNumber + strAttemptsLeft + strTotalPrize + strPossiblePrize, ''));
    }
    if (chooseNumber === randomlyChoosenNumber && counter === 1) {
      alert(`Congratulation, you won! Your prize is: ${prizeFirstTry}$`);
      let playAgain = confirm('Do you want to play again ?');

      if (playAgain === true && counter === 1) {
        maxNumber += maxRangeNumber;
        attemptsNumber = attemptsNumber + 1;
        randomlyChoosenNumber = Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
        startGameWindow = `Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${attemptsNumber}
Total prize: ${prizeFirstTry}$
Possible prize on current attempt: ${prizeFirstTryDouble}$`;
        chooseNumber = parseInt(prompt(startGameWindow, ''));
        if (chooseNumber === randomlyChoosenNumber && counter === 1) {
          alert(`Congratulation, you won! Your prize is: ${prizeFirstTryDouble + prizeFirstTry}$`);
        }

      }else {
        alert('Thank you for your participation. Your prize is: ' + prizeFirstTry + '$');
        break
      }

    } else if (chooseNumber === randomlyChoosenNumber && counter === xDouble) {
      alert(`Congratulation, you won! Your prize is: ${prizeFirstTry}$`);
      let playAgain = confirm('Do you want to play again ?');

      if (playAgain === true && counter === xDouble) {
        maxNumber += maxRangeNumber;
        attemptsNumber = attempts;
        randomlyChoosenNumber = Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
        startGameWindow = `Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${attemptsNumber}
Total prize: ${prizeFirstTry}$
Possible prize on current attempt: ${prizeFirstTryDouble}$`;
        chooseNumber = parseInt(prompt(startGameWindow, ''));
        if (chooseNumber === randomlyChoosenNumber && counter === xDouble) {
          alert(`Congratulation, you won! Your prize is: ${prizeFirstTryDouble + prizeFirstTry}$`);
        }
      }else {
        alert('Thank you for your participation. Your prize is: ' + prizeFirstTry + '$');
        break
      }

    }
  }
} else {
    alert('You did not become a billionaire, but can');
}