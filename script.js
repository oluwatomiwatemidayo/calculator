const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const userChoice = prompt("Calculator:");

function operate(a, b) {
    if(userChoice === "+") {
        return add(a, b);
    } else if(userChoice === "-") {
        return subtract(a, b);
    } else if(userChoice === "*") {
        return multiply(a, b);
    } else if(userChoice === "/") {
        return divide(a, b);
    }
}

console.log(operate(2, 5));
