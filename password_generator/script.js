const generateButton = document.getElementById("generateButton");
const lengthInput = document.getElementById("length");
const includeNumbersInput = document.getElementById("includeNumbers");
const includeSymbolsInput = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById("passwordDisplay");

const numbers = "0123456789"
const symbols = "!@#$%^&*()_+|\-`~"

generateButton.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);
    const includeNumbers = includeNumbersInput.checked;
    const includeSymbols = includeSymbolsInput.checked;

    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters +=numbers;
    if (includeSymbols) characters += symbols;

    let password = ""
    for (let i=0; i< length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password+= characters[randomIndex];
    }

    passwordDisplay.textContent = `Generated Password: ${password}`;
})