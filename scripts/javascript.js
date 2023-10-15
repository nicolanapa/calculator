let firstNumber = "0";
let secondNumber = "0";
let operator;
let display;
let variableDisplay = "0";
let touched = false;
display = document.querySelector("#disp");
display = document.createElement("div");
display.textContent = variableDisplay;
disp.appendChild(display);
let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    if ( touched == false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched == true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let one = document.querySelector("#one");
one.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let two = document.querySelector("#two");
two.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let three = document.querySelector("#three");
three.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let four = document.querySelector("#four");
four.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let five = document.querySelector("#five");
five.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let six = document.querySelector("#six");
six.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched === true) {
        if ( firstNumber == "0") {
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
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
        variableDisplay = Number(firstNumber) + Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        return disp.appendChild(display);
    }
    else if ( operator == "-" ) {
        variableDisplay = Number(firstNumber) - Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        return disp.appendChild(display);
    }
    else if ( operator == "*" ) {
        variableDisplay = Number(firstNumber) * Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        return disp.appendChild(display);
    }
    else if ( operator == "/" ) {
        variableDisplay = Number(firstNumber) / Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        return disp.appendChild(display);
    }
};

let clear = document.querySelector("#clear");
clear.addEventListener(("click"), () => {
    firstNumber = "0";
    secondNumber = "0";
    touched = false;
});