const canvas = document.getElementById("ganeshaCanvas");
const ctx = canvas.getContext("2d");
const input = document.getElementById("textInput");
const drawBtn = document.getElementById("drawBtn");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("status");

function clearCanvas(){
  ctx.fillStyle = "#050914";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  statusText.textContent = "";
}

function drawBackground(){
  const g = ctx.createRadialGradient(
    canvas.width/2, canvas.height/2, 50,
    canvas.width/2, canvas.height/2, 250
  );
  g.addColorStop(0,"#222244");
  g.addColorStop(1,"#050914");
  ctx.fillStyle = g;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

// individual parts
function drawHead(){
  ctx.beginPath();
  ctx.arc(200,150,70,0,Math.PI*2);
  ctx.fillStyle="#f5cba7";
  ctx.fill();
}

function drawEars(){
  ctx.beginPath();
  ctx.arc(100,150,60,0,Math.PI*2);
  ctx.arc(300,150,60,0,Math.PI*2);
  ctx.fillStyle="#f5cba7";
  ctx.fill();
}

function drawHat(){
  ctx.beginPath();
  ctx.arc(200,100,50,Math.PI,2*Math.PI);
  ctx.fillStyle="#FFD700";
  ctx.fill();
}

function drawTilak(){
  ctx.fillStyle="red";
  ctx.fillRect(190,120,20,5);
  ctx.fillRect(190,130,20,5);
  ctx.fillRect(190,140,20,5);
}

function drawEyes(){
  ctx.strokeStyle="black";
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.arc(180,160,10,0,Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(220,160,10,0,Math.PI);
  ctx.stroke();
}

function drawTrunk(){
  ctx.beginPath();
  ctx.moveTo(200,180);
  ctx.lineTo(200,250);
  ctx.lineWidth=12;
  ctx.strokeStyle="#f5cba7";
  ctx.stroke();
}

function drawStomach(){
  ctx.beginPath();
  ctx.arc(200,300,90,0,Math.PI*2);
  ctx.fillStyle="#FFD700";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150,340,15,0,Math.PI*2);
  ctx.fillStyle="orange";
  ctx.fill();
}

// all parts in sequence
const parts = [
  drawHead,
  drawEars,
  drawHat,
  drawTilak,
  drawEyes,
  drawTrunk,
  drawStomach
];

function animateDraw(){
  clearCanvas();
  drawBackground();
  statusText.textContent = "✨ Drawing Lord Ganesha... 🙏";

  let step = 0;
  function nextPart(){
    if(step < parts.length){
      parts[step]();
      step++;
      setTimeout(nextPart, 700); // delay between parts
    } else {
      statusText.textContent = "🎉 Jai Ganesha! Drawing Complete 🙏";
    }
  }
  nextPart();
}

// Button events
drawBtn.addEventListener("click", ()=>{
  if(input.value.trim().toUpperCase() === "JAI GANESHA"){
    animateDraw();
  } else {
    alert("Please type 'JAI GANESHA' to draw.");
  }
});

resetBtn.addEventListener("click", ()=>{
  clearCanvas();
});
