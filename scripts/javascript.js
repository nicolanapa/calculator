let firstNumber = "0";
let secondNumber = "0";
let operator;
let display;
let variableDisplay = "0";
let touched = false;
display = document.querySelector("#display");
let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    if ( touched == false ) {
        return firstNumber = firstNumber + "0";
    }
    else if ( touched == true) {
        return secondNumber = secondNumber + "0";
    }
});
let one = document.querySelector("#one");
one.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "1";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "1";
    }
});
let two = document.querySelector("#two");
two.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "2";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "2";
    }
});
let three = document.querySelector("#three");
three.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "3";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "3";
    }
});
let four = document.querySelector("#four");
four.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "4";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "4";
    }
});
let five = document.querySelector("#five");
five.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "5";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "5";
    }
});
let six = document.querySelector("#six");
six.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "6";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "6";
    }
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "7";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "7";
    }
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "8";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "8";
    }
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if ( touched === false ) {
        return firstNumber = firstNumber + "9";
    }
    else if ( touched === true) {
        return secondNumber = secondNumber + "9";
    }
});

// ----------------------------------------------

let plus = document.querySelector("#plus");
plus.addEventListener(("click"), () => {
    touched = true;
    
});
function add(firstNumber, secondNumber) {
        operator = "+";
};

let minus = document.querySelector("#minus");
minus.addEventListener(("click"), () => {
    touched = true;
    
});
function subtract(firstNumber, secondNumber) {
    operator = "-";
};

let multiple = document.querySelector("#multiple");
multiple.addEventListener(("click"), () => {
    touched = true;
    
});
function multiply(firstNumber, secondNumber) {
    operator = "*"
};

let divides = document.querySelector("#divides");
plus.addEventListener(("click"), () => {
    touched = true;
    
});
function divide(firstNumber, secondNumber) {
    operator = "/";
};

let equal = document.querySelector("#equal");
equal.addEventListener(("click"), () => {
    operate(firstNumber, secondNumber);

});
function operate(firstNumber, secondNumber) {
    if ( operator == "+" ) {
        return variableDisplay = Number(firstNumber) + Number(secondNumber);
    }
    else if ( operator == "-" ) {
        return variableDisplay = Number(firstNumber) - Number(secondNumber);
    }
    else if ( operator == "*" ) {
        return variableDisplay = Number(firstNumber) * Number(secondNumber);
    }
    else if ( operator == "/" ) {
        return variableDisplay = Number(firstNumber) / Number(secondNumber);
    }
};

let clear = document.querySelector("#clear");
clear.addEventListener(("click"), () => {
    firstNumber = "0";
    secondNumber = "0";
    touched = false;
});