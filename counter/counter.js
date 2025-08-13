

function Inc(){
    let h2 = document.querySelector("h2");
    let value = parseInt(h2.innerText);
    h2.innerText = value+1;
}


function Dec(){
    let h2 = document.querySelector("h2");
    let value = parseInt(h2.innerText);
    if(value>0){
        document.querySelector("h2").innerText = value-1;
    }
    else if(value<=0){
        document.querySelector("h2").textContent = value-1
    }
   
}


function reset(){
    let h2 = document.querySelector("h2");
    let value = parseInt(h2.innerText);
    if(value>0){
        document.querySelector("h2").innerText = 0;
    }
    else if(value<0){
        document.querySelector("h2").innerText = 0;
    }
    else{
        alert("value is already 0")
    }
}


