let user_container = document.getElementById("userdata")
let addBtn = document.getElementById("add")

// Fetch and display users
fetch("https://gorest.co.in/public/v2/users", {
  method: "GET",
  headers: {
    Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
  },
})
.then(response => response.json())
.then(jsondata => {
  console.log(jsondata)
  user_container.innerHTML = ""; // clear before loading
  jsondata.forEach(user => {
    let card = document.createElement("div")
    card.classList = "card"
    card.innerHTML = `
      <p>${user.id}</p>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.gender}</p>
      <div class="card-buttons">
        <button class="delete-btn" data-id="${user.id}">Delete</button>
        <button class="update-btn" data-id="${user.id}">Update</button>
      </div>
    `
    user_container.appendChild(card)
  });

  // Attach delete button events
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      let userId = this.getAttribute("data-id");
      deleteUser(userId);
    });
  });

  // Attach update button events
  document.querySelectorAll(".update-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      let userId = this.getAttribute("data-id");
      updateUser(userId);
    });
  });
});


// Add new user
function addUser(){
  let user = {
    name : "sanju",
    email: "sanju@gmail.com",
    gender: "male",
    status: "active"
  }

  fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers:{
      "Content-type":"application/json",
      Accept: "application/json",
      Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(jsondata => {
    console.log(jsondata);
    location.reload(); // reload to see new user
  });
}


// Delete user
function deleteUser(userId){
  fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
    method:"DELETE",
    headers:{
      Accept: "application/json",
      Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872"
    }
  })
  .then(res => {
    console.log(res);
    location.reload(); // reload after delete
  });
}


// Update user
function updateUser(userId){
  let user = {
    gender:"male",
    name:"P.Srinivas",
    email:"psrinivaspeddada@gmail.com"
  }

  fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
    method:"PUT",
    body: JSON.stringify(user),
    headers:{
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872",
    }
  })
  .then(res => res.json())
  .then(jsondata => {
    console.log(jsondata);
    location.reload(); // reload to see update
  });
}


// Add button only for new users
addBtn.addEventListener("click", addUser);
