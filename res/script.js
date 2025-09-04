let historyStack = [];

function goToMenuChoice() {
  navigateTo("menu-choice");
}

function showMenu(type) {
  if (type === "veg") {
    navigateTo("veg-menu");
  } else {
    navigateTo("nonveg-menu");
  }
}

function placeOrder(item) {
  document.getElementById("order-text").innerText =
    "You have ordered: " + item + " 🍽️";
  navigateTo("order-details");
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop(); 
    let prev = historyStack[historyStack.length - 1];
    showScreen(prev, false); 
  }
}

function navigateTo(id) {
  historyStack.push(id);
  showScreen(id, false);
}

function showScreen(id, push = true) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  if (push) {
    historyStack.push(id);
  }
}

showScreen("welcome-screen");
