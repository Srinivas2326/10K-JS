//  print even numbers from 1 to 100

// for (let i =1; i<=100; i++){
//     document.write(i + "<br>")
// }

// _____________________________________________________________________________________________________

// Reverse a string

// let a = "srinivas";
// let b = " "

// for (let i =a.length-1; i>=0; i--){
//     b+=a[i];
// }

// document.write(b)

// ____________________________________________________________________________________________________


// Print the sum of all even numbers from 1 to 100

// let sum = 0;

// for(let i =0; i<=100; i++){
//     if(i%2==0){
//         sum+=1
//     }
// }
// document.write(sum)

// _____________________________________________________________________________________________________

// for (let i =1; i<=10; i++){
//     document.write("5 x " + i + "=" + (5*i) + "<br>")
// }


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


