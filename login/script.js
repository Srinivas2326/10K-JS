    const loginButton = document.getElementById("login");
    const mainContainer = document.querySelector(".main");
    const afterLogin = document.querySelector(".after-login");


    // To display the login section and hide the main section
    loginButton.onclick = showLogin

    function showLogin(){
        mainContainer.style.display="none"
        document.querySelector(".login-container").style.display="block";
    }


    // To hide the login section and display the main container
    document.getElementById("close").addEventListener('click',hideLogin);

    function hideLogin(){
        mainContainer.style.display="block";
        document.querySelector(".login-container").style.display="none";
    }



   function verifying(){
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    if (userName=="srinivas" && passWord=="12345"){
        document.querySelector("h3").innerText="Login Successful";
        document.querySelector("h3").style.color="green";
        document.getElementById("login").style.textAlign="center";
        document.querySelector(".message").textContent = alert("Welcome " + userName);
        document.querySelector(".main").textContent="You succefully looged into your account!"
    }
    else{
        document.querySelector("h3").innerText = "Login Failed";
        document.querySelector("h3").style.color="red";
        document.getElementById("login").style.textAlign="center";
        document.querySelector(".message").textContent = alert("Invalid credentials");
    }

}