var num1;
var num2;
var operator;

const displayspan = document.getElementById("dval");
const calcspan = document.getElementById("dcalc");

const numButtons = document.querySelectorAll(".num");
const operateButtons = document.querySelectorAll(".op")

const equalButton = document.querySelector(".eq")


numButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        var number;
        number = button.innerHTML;
        populateDisplay(number);
    })
})

operateButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        operator = button.innerHTML;
        displayspan.innerText = calcspan.innerText + " "+ operator;
        num1 = parseInt(calcspan.innerText);
    })
})


equalButton.addEventListener("click", function(){
    num2 = calcspan.innerText;
    displayspan.innerText =  num1.toString()+ " "+ operator + " " + num2 + " ="; 
    num2 = parseInt(calcspan.innerText);
    num1 = operate(num1, num2, operator);
    calcspan.innerText = num1;
})

function operate(num1, num2, operator){
    switch(operator) {
        case "×":
            return num1 * num2;
        case "÷":
            return num1 / num2;
        case "-":
            return num1 - num2;
        case "+":
            return num1 + num2;
    }
}

function populateDisplay(number){
    if(calcspan.innerText == "0"){
        calcspan.innerText = number;
    }
    else{
        calcspan.innerText = calcspan.innerText + number;
    }
}

