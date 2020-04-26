let userInput = prompt('Please, type a word', '');
let divider = 2;
let numberOfLetters = 2;
let findEvenOrOddLengthUserInput = userInput.length % divider;
let regexp = /^\s/;

if (findEvenOrOddLengthUserInput && userInput !== '' && !regexp.test(userInput )) {
    alert(userInput.substr(userInput.length / divider, 1));
} else if (!findEvenOrOddLengthUserInput && userInput !== '') {
    alert(userInput.substr(userInput.length / divider - 1, numberOfLetters));
} else if (!userInput || regexp.test(userInput)) {
    alert('Ivalid value');
}


