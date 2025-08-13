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



var createCounter = function(n){
    return function() {
        return n++
    }
}

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())