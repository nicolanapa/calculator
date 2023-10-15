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
            return firstNumber = "0";
        }
        else {
            return firstNumber = firstNumber + "0";
        }
    }
    else if ( touched == true) {
        if ( secondNumber == "0") {
            return secondNumber = "0";
        }
        else {
            return secondNumber = secondNumber + "0";
        }
    }
});
let one = document.querySelector("#one");
one.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "1";
        }
        else {
            return firstNumber = firstNumber + "1";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "1";
        }
        else {
            return secondNumber = secondNumber + "1";
        }
    }
});
let two = document.querySelector("#two");
two.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "2";
        }
        else {
            return firstNumber = firstNumber + "2";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "2";
        }
        else {
            return secondNumber = secondNumber + "2";
        }
    }
});
let three = document.querySelector("#three");
three.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "3";
        }
        else {
            return firstNumber = firstNumber + "3";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "3";
        }
        else {
            return secondNumber = secondNumber + "3";
        }
    }
});
let four = document.querySelector("#four");
four.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "4";
        }
        else {
            return firstNumber = firstNumber + "4";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "4";
        }
        else {
            return secondNumber = secondNumber + "4";
        }
    }
});
let five = document.querySelector("#five");
five.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "5";
        }
        else {
            return firstNumber = firstNumber + "5";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "5";
        }
        else {
            return secondNumber = secondNumber + "5";
        }
    }
});
let six = document.querySelector("#six");
six.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "6";
        }
        else {
            return firstNumber = firstNumber + "6";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "6";
        }
        else {
            return secondNumber = secondNumber + "6";
        }
    }
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "7";
        }
        else {
            return firstNumber = firstNumber + "7";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "7";
        }
        else {
            return secondNumber = secondNumber + "7";
        }
    }
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "8";
        }
        else {
            return firstNumber = firstNumber + "8";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "8";
        }
        else {
            return secondNumber = secondNumber + "8";
        }
    }
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if ( touched === false ) {
        if ( firstNumber == "0") {
            return firstNumber = "9";
        }
        else {
            return firstNumber = firstNumber + "9";
        }
    }
    else if ( touched === true) {
        if ( secondNumber == "0") {
            return secondNumber = "9";
        }
        else {
            return secondNumber = secondNumber + "9";
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
plus.addEventListener(("click"), () => {
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
        return disp.appendChild(display);
    }
    else if ( operator == "-" ) {
        variableDisplay = Number(firstNumber) - Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        return disp.appendChild(display);
    }
    else if ( operator == "*" ) {
        variableDisplay = Number(firstNumber) * Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        return disp.appendChild(display);
    }
    else if ( operator == "/" ) {
        variableDisplay = Number(firstNumber) / Number(secondNumber);
        firstNumber = variableDisplay;
        display.textContent = variableDisplay;
        touched = true;
        return disp.appendChild(display);
    }
};

let clear = document.querySelector("#clear");
clear.addEventListener(("click"), () => {
    firstNumber = "0";
    secondNumber = "0";
    touched = false;
    variableDisplay = "0";
});
display.textContent = variableDisplay;