
let user_container = document.getElementById("userdata")
let addBtn = document.getElementById("add")
let deleteBtn = document.getElementById("dlte")
let updateBtn = document.getElementById("update")


fetch("https://gorest.co.in/public/v2/users",{
  method: "GET",
    headers:{
      Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
    },
})
.then(function(response){
  return response.json()
})
.then(function(jsondata){
  console.log(jsondata)
  for(let i=0; i<jsondata.length; i++){
    let card = document.createElement("div")
    card.classList="card"
    card.innerHTML=`
        <p>${jsondata[i].id}</p>
        <p>${jsondata[i].name}</p>
        <p>${jsondata[i].email}</p>
        <p>${jsondata[i].gender}</p>
        
    `
    user_container.appendChild(card)
  }
})


// To add new data

function addUser(){
let user = {
      name : "srinuivas",
      email: "srinuivas@gmail.com",
      gender: "male",
      status: "active"
    }


fetch("https://gorest.co.in/public/v2/users",
  {
    method: "POST",
    headers:{
      "Content-type":"application/json",
      Accept: "application/json",
      Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
    },
    body: JSON.stringify(user)
  })

  .then(function(res){
return res.json()
  })

.then(function(jsondata){
  console.log(jsondata)
})
}
// ___________________________________________________________________________________

// how to delete a user

function deleteUser(){
fetch("https://gorest.co.in/public/v2/users/8099696",{
  method:"DELETE",
  headers:{
    Accept: "application/json",
    Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
  }
})
.then(function(res){
  console.log(res)
})
}

// ______________________________________________________________________________________________________________________

// UPDATE DATA

function updateUser(){
let user = {
      gender:"male",
      name:"srinivasPeddada",
      email:"srinivas1234peddada@gmail.com"
      
    }


fetch("https://gorest.co.in/public/v2/users/8099810",{
  method:"PUT",
  body: JSON.stringify(user),
  headers:{
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872",
  }
})
.then(function(res){
  return res.json()
})
.then(function(jsondata){
  console.log(jsondata)
})
}




addBtn.addEventListener("click", addUser)
deleteBtn.addEventListener("click", deleteUser)
updateBtn.addEventListener("click", updateUser)