let changeRed = function(){
    document.querySelector('.light.red').style.backgroundColor = 'red';
    document.querySelector(".red-c").style.display="block";
    document.querySelector('.light.yellow').style.backgroundColor = 'black';
    document.querySelector('.yellow-c').style.display="none";
    document.querySelector('.light.green').style.backgroundColor = 'black';
    document.querySelector('.green-c').style.display="none";
}

let changeYellow = function(){
    document.querySelector('.light.red').style.backgroundColor = 'black';
    document.querySelector('.red-c').style.display="none";
    document.querySelector('.light.yellow').style.backgroundColor = 'yellow';
    document.querySelector(".yellow-c").style.display="block";
    document.querySelector('.light.green').style.backgroundColor = 'black';
    document.querySelector('.green-c').style.display="none";

}

let changeGreen = function(){
    document.querySelector('.light.red').style.backgroundColor = 'black';
    document.querySelector('.red-c').style.display="none";
    document.querySelector('.light.yellow').style.backgroundColor = 'black';
    document.querySelector('.yellow-c').style.display="none";
    document.querySelector('.light.green').style.backgroundColor = 'green';
    document.querySelector(".green-c").style.display="block";
}