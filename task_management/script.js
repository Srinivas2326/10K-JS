// // Load saved tasks from localStorage
// let friends = JSON.parse(localStorage.getItem("tasks")) || [];

// // Create Heading
// let heading = document.createElement("h1");
// heading.textContent = "Task Management";
// document.body.appendChild(heading);

// // Create Input
// let userInput = document.createElement("input");
// userInput.id = "input";
// document.body.appendChild(userInput);

// // Create Add Button
// let addBtn = document.createElement("button");
// addBtn.textContent = "Add";
// addBtn.classList = "btn";
// document.body.appendChild(addBtn);

// // Create Container
// let container = document.createElement("div");
// document.body.appendChild(container);

// // Save tasks to localStorage
// function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(friends));
// }

// // Render task list
// function renderList() {
//     container.innerHTML = "";
//     let ul = document.createElement("ul");

//     for (let eachName of friends) {
//         let li = document.createElement("li");
//         li.textContent = eachName.name + " ";

//         // Add strike-through if completed
//         if (eachName.completed) {
//             li.style.textDecoration = "line-through";
//             li.style.color = "gray";
//         }

//         // Toggle strike-through on click
//         li.onclick = () => {
//             eachName.completed = !eachName.completed;
//             saveTasks();
//             renderList();
//         };

//         // Delete button
//         let deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.onclick = (e) => {
//             e.stopPropagation(); // Prevent li click
//             friends.splice(friends.indexOf(eachName), 1);
//             saveTasks();
//             renderList();
//         };

//         li.appendChild(deleteBtn);
//         ul.appendChild(li);
//     }

//     container.appendChild(ul);
// }

// // Add button functionality
// addBtn.onclick = () => {
//     let currentName = userInput.value.trim();
//     if (currentName) {
//         friends.push({ name: currentName, completed: false });
//         saveTasks();
//         userInput.value = "";
//         renderList();
//     }
// };

// // Press Enter to add
// userInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         addBtn.click();
//     }
// });

// // Initial render
// renderList();



const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if (inputbox.value.trim() === ''){
        alert('Please enter an item');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.classList.add('closebut');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data') || "";
}
showTask();
