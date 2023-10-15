let firstNumber = "0";
let secondNumber = "0";
let operator;
let display;
let variableDisplay = "0";
let touched = false;
display = document.querySelector("#disp");
display = document.createElement("div");

disp.appendChild(display);
let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    if ( touched == false ) {
        if ( firstNumber == "0") {
            firstNumber = "0";
        }
        else {
            firstNumber = firstNumber + "0";
        }
    }
    else if ( touched == true) {
        if ( secondNumber == "0") {
            secondNumber = "0";
        }
        else {
            secondNumber = secondNumber + "0";
        }
    }
});
let one = document.querySelector("#one");
one.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "1";
        }
        else {
            firstNumber = firstNumber + "1";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "1";
        }
        else {
            secondNumber = secondNumber + "1";
        }
    }
});
let two = document.querySelector("#two");
two.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "2";
        }
        else {
            firstNumber = firstNumber + "2";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "2";
        }
        else {
            secondNumber = secondNumber + "2";
        }
    }
});
let three = document.querySelector("#three");
three.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "3";
        }
        else {
            firstNumber = firstNumber + "3";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "3";
        }
        else {
            secondNumber = secondNumber + "3";
        }
    }
});
let four = document.querySelector("#four");
four.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "4";
        }
        else {
            firstNumber = firstNumber + "4";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "4";
        }
        else {
            secondNumber = secondNumber + "4";
        }
    }
});
let five = document.querySelector("#five");
five.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "5";
        }
        else {
            firstNumber = firstNumber + "5";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "5";
        }
        else {
            secondNumber = secondNumber + "5";
        }
    }
});
let six = document.querySelector("#six");
six.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "6";
        }
        else {
            firstNumber = firstNumber + "6";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "6";
        }
        else {
            secondNumber = secondNumber + "6";
        }
    }
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "7";
        }
        else {
            firstNumber = firstNumber + "7";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "7";
        }
        else {
            secondNumber = secondNumber + "7";
        }
    }
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "8";
        }
        else {
            firstNumber = firstNumber + "8";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "8";
        }
        else {
            secondNumber = secondNumber + "8";
        }
    }
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            firstNumber = "9";
        }
        else {
            firstNumber = firstNumber + "9";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            secondNumber = "9";
        }
        else {
            secondNumber = secondNumber + "9";
        }
    }
});

// ----------------------------------------------

let plus = document.querySelector("#plus");
plus.addEventListener(("click"), () => {
    touched = true;
    operator = "+";
});


let minus = document.querySelector("#minus");
minus.addEventListener(("click"), () => {
    touched = true;
    operator = "-";
});

let multiple = document.querySelector("#multiple");
multiple.addEventListener(("click"), () => {
    touched = true;
    operator = "*";
});

let divides = document.querySelector("#divides");
divides.addEventListener(("click"), () => {
    touched = true;
    operator = "/";
});

let equal = document.querySelector("#equal");
equal.addEventListener(("click"), () => {
    operate(firstNumber, secondNumber);
    return variableDisplay;

});
function operate(firstNumber, secondNumber) {
    if ( operator == "+" ) {
        variableDisplay = Number(firstNumber) + Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        secondNumber = "0";
    }
    else if ( operator == "-" ) {
        variableDisplay = Number(firstNumber) - Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        secondNumber = "0";
    }
    else if ( operator == "*" ) {
        variableDisplay = Number(firstNumber) * Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        secondNumber = "0";
    }
    else if ( operator == "/" ) {
        variableDisplay = Number(firstNumber) / Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        secondNumber = "0";
    }
};

let clear = document.querySelector("#clear");
clear.addEventListener(("click"), () => {
    firstNumber = "0";
    secondNumber = "0";
    touched = false;
    variableDisplay = "0";
    disp.appendChild(display);
});
display.textContent = variableDisplay;