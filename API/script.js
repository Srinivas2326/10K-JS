let user_container = document.getElementById("userdata");

const TOKEN = "Bearer 35f70ed1edc2922a5711e9ec54249cc62fee316524ff00c7dc87130f94838872";

// Fetch and display users
function fetchUsers() {
  fetch("https://gorest.co.in/public/v2/users", {
    method: "GET",
    headers: { Authorization: TOKEN },
  })
    .then(res => res.json())
    .then(users => {
      user_container.innerHTML = "";
      users.forEach(user => {
        let card = document.createElement("div");
        card.classList = "card";
        card.innerHTML = `
          <p>ID: ${user.id}</p>
          <p>${user.name}</p>
          <p>${user.email}</p>
          <p>${user.gender}</p>
          <button onclick="deleteUser(${user.id})">Delete</button>
          <button onclick="showUpdateForm(${user.id}, '${user.name}', '${user.email}', '${user.gender}')">Update</button>
        `;
        user_container.appendChild(card);
      });
    });
}

// Add user
document.getElementById("addUserForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    name: document.getElementById("addName").value,
    email: document.getElementById("addEmail").value,
    gender: document.getElementById("addGender").value,
    status: "active"
  };

  fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: TOKEN
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(() => fetchUsers());
});

// Delete user
function deleteUser(id) {
  fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "DELETE",
    headers: { Authorization: TOKEN }
  }).then(() => fetchUsers());
}

// Show inline update form
function showUpdateForm(id, name, email, gender) {
  let card = [...document.querySelectorAll(".card")]
    .find(c => c.innerHTML.includes(`ID: ${id}`));

  card.innerHTML = `
    <form onsubmit="updateUser(event, ${id})">
      <input type="text" id="updateName${id}" value="${name}" required>
      <input type="email" id="updateEmail${id}" value="${email}" required>
      <select id="updateGender${id}" required>
        <option value="male" ${gender === "male" ? "selected" : ""}>Male</option>
        <option value="female" ${gender === "female" ? "selected" : ""}>Female</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onclick="fetchUsers()">Cancel</button>
    </form>
  `;
}

// Update user
function updateUser(e, id) {
  e.preventDefault();
  let user = {
    name: document.getElementById(`updateName${id}`).value,
    email: document.getElementById(`updateEmail${id}`).value,
    gender: document.getElementById(`updateGender${id}`).value,
    status: "active"
  };

  fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: TOKEN
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(() => fetchUsers());
}

// Initial load
fetchUsers();
