let userForm = document.getElementById("form")
let nameElement = document.getElementById("name")
let mailElement = document.getElementById("email")
let selectElement = document.getElementById("gender")

userForm.addEventListener("submit", function(event){
    event.preventDefault()
})

nameElement.addEventListener("blur", function(res){
    console.log(nameElement.value)
})

mailElement.addEventListener("focus", function(res){
    console.log(mailElement.value)
})

selectElement.addEventListener("change", function(){
    console.log("gender....")
})