let gussedNumber = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100)
let textValue = document.getElementById("userInput")

function checkGuess() {
    let guessedNumber = parseInt(textValue.value);
    if (guessedNumber > randomNumber) {
        gussedNumber.textContent = "Too high";
        gussedNumber.style.backgroundColor = "#1e217c";

    } else if (guessedNumber < randomNumber) {
        gussedNumber.textContent = "Too low";
        gussedNumber.style.backgroundColor = "1e217c";

    } else if (guessedNumber === randomNumber) {
        gussedNumber.textContent = "congrates";
        gussedNumber.style.backgroundColor = "green";

    } else {
        gussedNumber.textContent = "Please provide a valid input.";
        gussedNumber.style.backgroundColor = "#1e217c";

    }


}