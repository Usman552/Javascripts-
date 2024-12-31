const inputNumber = document.getElementById('field');
const checkbtn = document.getElementById('check');
const result = document.getElementById('result');

const randomNumber = Math.floor(Math.random() * 100) ; 
console.log("Random Number:", randomNumber);

checkbtn.addEventListener("click", () => {
  const guess = Number(inputNumber.value); 
  
  if (!guess) {
    result.textContent = "Please Enter a Valid Number";
    return;
  }
  
  if (guess === randomNumber) {
    result.textContent = `🎉 Correct Guess! The number was ${randomNumber}`;
    inputNumber.disabled = true; 
    checkbtn.disabled = true; 
  } else if (guess > randomNumber) {
    result.textContent = `📈 Oops! Too High. The number was ${randomNumber}`;
  } else if (guess < randomNumber) {
    result.textContent = `📉 Oops! Too Low. The number was ${randomNumber}`;
  }
  
  inputNumber.value = ""; 
});
