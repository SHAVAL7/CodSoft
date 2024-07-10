let output = document.getElementById("output");

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    output.value = "";
}

function del(){
    output.value= output.value.slice(0,-1)
}


container = document.querySelector(".container")
calculator = document.querySelector(".calculator")
themedark=document.querySelector(".themed")
themelight=document.querySelector(".themel")
var button= document.querySelectorAll(".button")


function themel(){
    container.style.background="#ecf0f3";
    themelight.style.display="block";
    themelight.style.position="relative";
    themedark.style.display="none";
    calculator.style.backgroundColor=" rgb(46, 45, 45)";
    calculator.style.boxShadow="rgba(0, 0, 0, 0.35) 10px 10px 25px;";
    themelight.style.boxShadow="-3px -3px 5px rgba(0,0,0,.16),3px 3px 8px #ffffff";
}

function themed(){
    container.style.background="rgb(46, 45, 45)";
    themelight.style.display="none";
    themelight.style.position="relative";
    themedark.style.display="block";
    calculator.style.backgroundColor="#ecf0f3";
}