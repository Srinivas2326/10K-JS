let user_container = document.getElementById("userData");

// ✅ Fetch todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((jsondata) => {
    console.log("Todos:", jsondata);
    for (let i = 0; i < 5; i++) { // show only first 5
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
          <p><b>ID:</b> ${jsondata[i].id}</p>
          <p><b>Title:</b> ${jsondata[i].title}</p>
          <p><b>Completed:</b> ${jsondata[i].completed}</p>
      `;

      user_container.appendChild(card);
    }
  });

// ✅ User data to post
let user = {
  name: "srinivas",
  email: "srinu" + Date.now() + "@gmail.com", // unique email each time
  gender: "male",
  status: "active",
};

// ✅ POST request to GoRest
fetch("https://gorest.co.in/public/v2/users", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: "",
  },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((jsondata) => {
    console.log("Created User:", jsondata);

    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>New User Created</h3>
        <p><b>ID:</b> ${jsondata.id}</p>
        <p><b>Name:</b> ${jsondata.name}</p>
        <p><b>Email:</b> ${jsondata.email}</p>
        <p><b>Gender:</b> ${jsondata.gender}</p>
        <p><b>Status:</b> ${jsondata.status}</p>
    `;
    user_container.appendChild(card);
  });
