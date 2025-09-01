
let user_container = document.getElementById("userdata")


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

// let user = {
//       name : "Jaan",
//       email: "Jaan@gmail.com",
//       gender: "female",
//       status: "active"
//     }


// fetch("https://gorest.co.in/public/v2/users",
//   {
//     method: "POST",
//     headers:{
//       "Content-type":"application/json",
//       Accept: "application/json",
//       Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
//     },
//     body: JSON.stringify(user)
//   })

//   .then(function(res){
// return res.json()
//   })

// .then(function(jsondata){
//   console.log(jsondata)
// })

// ___________________________________________________________________________________

// how to delete a user

// fetch("https://gorest.co.in/public/v2/users/8099584",{
//   method:"DELETE",
//   headers:{
//     Accept: "application/json",
//     Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
//   }
// })
// .then(function(res){
//   console.log(res)
// })

// ______________________________________________________________________________________________________________________

// UPDATE DATA

let user = {
      gender:"female"
      
    }


fetch("https://gorest.co.in/public/v2/users/8099585",{
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