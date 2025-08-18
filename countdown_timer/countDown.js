const countDownInput = document.getElementById("input")
const button = document.getElementById("countDown")
const timerDisplay = document.getElementById("timerDisplay")

let myCountDown;

button.addEventListener("click", (e)=> {
    e.preventDefault();

    clearInterval(myCountDown);

    let seconds = parseInt(countDownInput.value)

    if (isNaN(seconds) || seconds <=0) {
        timerDisplay.textConent = "Enter a valid positive number"
        return
    }

    myCountDown = setInterval(() => {
        if (seconds <=0) {
            clearInterval(myCountDown)
            timerDisplay.textContent= "Time is Up"
        }
        else {
            const minutes = Math.floor(seconds/60)
            const remainingSeconds = seconds % 60
            timerDisplay.textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds
            seconds--
        }
    },1000)
})