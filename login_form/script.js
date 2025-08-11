document.querySelector("h2").style.color="red";

// const verifying = function(){
//     document.querySelector("button").innerText="Verifying..."
// }

function verifying(){
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    if (userName=="srinivas" && passWord=="12345"){
        document.querySelector("h2").innerText="Login Successful";
        document.querySelector("h2").style.color="green";
        document.getElementById("message").textContent = alert("Welcome " + userName);
    }
    else{
        document.querySelector("h2").innerText = "Login Failed";
        document.querySelector("h2").style.color="red";
        document.getElementById("message").textContent = alert("Invalid credentials");
    }

}