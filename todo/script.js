const inputBox = document.getElementById("input");
const listContainer = document.getElementById("todo-list");
const addBtn = document.getElementById("addBtn");

// Add Task
function add() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Close button
        let span = document.createElement("span");
        span.classList.add("closeBtn");
        span.innerHTML = "\u00d7"; // × symbol
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

// Handle task check/remove
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("closeBtn")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();

// Add button event
addBtn.addEventListener("click", add);

// Enter key support
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        add();
    }
});
