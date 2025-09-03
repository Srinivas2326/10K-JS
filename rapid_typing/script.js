const words = ["apple", "banana", "cherry", "date", "elephant", "fish", "grapes", "horse", "inguva", "jackfruit", "kangaroo", "lemon", "mango", "nectraine", "octopus", "papaya", "queen", "rhinoceros", "strawberry", "tiger", "umbrella", "vessel", "watermelon", "xylophone", "zebra"];
const textDisplay = document.getElementById("text-display");

function getRandomWords() {
  let text = "";
  for (let i = 0; i < 30; i++) {
    text += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return text.trim();
}

function loadText() {
  const text = getRandomWords();
  textDisplay.innerHTML = "";
  text.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    textDisplay.appendChild(span);
  });
}

loadText();
const input = document.getElementById("text-input");
let charIndex = 0;

input.addEventListener("input", () => {
  const characters = textDisplay.querySelectorAll("span");
  const typedChar = input.value.split("")[charIndex];

  if (typedChar == null) return;

  if (typedChar === characters[charIndex].innerText) {
    characters[charIndex].classList.add("correct");
  } else {
    characters[charIndex].classList.add("incorrect");
  }
  charIndex++;
});
let time = 60;
let timer = null;

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    time--;
    document.getElementById("time").innerText = time;
    if (time === 0) {
      clearInterval(timer);
      input.disabled = true;
    }
  }, 1000);
}

input.addEventListener("input", startTimer);
let correctChars = 0;
let totalChars = 0;

input.addEventListener("input", () => {
  totalChars++;
  const characters = textDisplay.querySelectorAll("span");
  const typedChar = input.value[input.value.length - 1];

  if (typedChar === characters[charIndex - 1].innerText) {
    correctChars++;
  }

  const accuracy = Math.round((correctChars / totalChars) * 100);
  document.getElementById("accuracy").innerText = accuracy;

  const elapsedTime = 60 - time;
  if (elapsedTime > 0) {
    const wpm = Math.round((correctChars / 5) / (elapsedTime / 60));
    document.getElementById("wpm").innerText = wpm;
  }
});
