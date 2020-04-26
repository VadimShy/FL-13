let checkNumberValue = prompt('Please, enter your check number', '');
let tipPercentageValue = prompt('Please, enter your tip percentage', '');
let percentageDivider = 100;

let tipAmount = checkNumberValue * (tipPercentageValue/percentageDivider);
let totalSumToPay = +checkNumberValue + +tipAmount;

let isNumberCheckNumberValue = !isNaN(checkNumberValue);
let isNumberTipPercentageValue = !isNaN(tipPercentageValue);

if (isNumberCheckNumberValue && checkNumberValue > 0 && isNumberTipPercentageValue && 
    tipPercentageValue > 0 && tipPercentageValue <= percentageDivider) {
alert(`Check number: ${checkNumberValue}
Tip: ${tipPercentageValue}%
Tip amount: ${tipAmount}
Total sum to pay: ${totalSumToPay}`);
}else {
    alert('Invalid input data');
}