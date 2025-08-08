let randomNumber = Math.random()*100
randomNumber = Math.ceil(randomNumber)

function guess(){
    let currentValue = document.getElementById("guess-input").value;
    currentValue = parseInt(currentValue)
    // console.log("guessing number is triggered")

    if (currentValue == randomNumber){
        document.getElementById("result").innerText = alert("Congratulations! Your Guessed The Correct The number!")
    }
    else if (currentValue>randomNumber){
        document.getElementById("result").innerText="Your Guessing Number is Too High!"
    }
    else if(currentValue<randomNumber){
        document.getElementById("result").innerText="Your Guessing Number is Too Low!"
    }
    else{
        document.getElementById("result").innerText="Enter a Valid Number!"
    }
}