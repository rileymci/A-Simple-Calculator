var num1 = 0;
var num2;
var operator;
var initialdigit = true;
var num2string;
var equalbool = false;

var num2inuse = false;

const displayspan = document.getElementById("dval");
const calcspan = document.getElementById("dcalc");

const numButtons = document.querySelectorAll(".num");
const operateButtons = document.querySelectorAll(".op")

const equalButton = document.querySelector(".eq")

const clearButton = document.querySelector(".clr")
const deleteButton = document.querySelector(".dlt")

numButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        var number;
        number = button.innerHTML;
        populateDisplay(number);
        if(operator){
            num2inuse = true;
        }
    })
})

operateButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        if(!num2inuse){
            operator = button.innerHTML;
            num1 = parseInt(calcspan.innerText);
            displayspan.innerText = calcspan.innerText + " "+ operator;
            initialdigit = true;
            console.log("1");
        }
        //If num2 is in use
        else{
            num2 = parseInt(calcspan.innerText);
            num1 = operate(num1, num2, operator)
            operator = button.innerHTML;
            displayspan.innerText = num1.toString() + " "+ operator;
            calcspan.innerText = num1;
            num2inuse = false;
            initialdigit = true;
        }
        

        equalbool = false;
    })
})


equalButton.addEventListener("click", function(){
    if(!equalbool){
        num2string = calcspan.innerText;
        displayspan.innerText =  num1.toString()+ " "+ operator + " " + num2string + " =";
        num2 = parseInt(num2string);
        num1 = operate(num1, num2, operator);
        calcspan.innerText = num1;

        equalbool = true;
    }
    else{
        num1 = operate(num1, num2, operator);
        displayspan.innerText =  calcspan.innerText + " "+ operator + " " + num2string + " =";
        calcspan.innerText = num1; 
    }

    initialdigit = true;
    num2inuse = false;
})


clearButton.addEventListener("click", function(){
    num1 = 0;
    num2 = null;
    operator = null;
    num2string = null;
    initialdigit = true;
    num2inuse = false;
    equalbool = false;

    displayspan.innerText = '\u00A0';
    calcspan.innerText = "0";
})


deleteButton.addEventListener("click", function(){
    let temp = calcspan.innerText;
    calcspan.innerText = temp.slice(0,-1);
    if(calcspan.innerText.length == 0){
        calcspan.innerText = 0;
        num1 = "0";
        initialdigit = true;
    }
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
    if(initialdigit){
        calcspan.innerText = number;
        initialdigit = false;
    }
    else{
        calcspan.innerText = calcspan.innerText + number;
    }
}


