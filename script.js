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

let userChoice = "";
let a = "";
let b = "";

function operate(a, userChoice, b) {
    if(userChoice === "+") {
        return add(a, b);
    } else if(userChoice === "-") {
        return subtract(a, b);
    } else if(userChoice === "x") {
        return multiply(a, b);
    } else if(userChoice === "/") {
        return divide(a, b);
    }
}

const display = document.querySelector('#screen');

const one = document.querySelector('#one')
one.addEventListener('click', ()  => {
    display.textContent += 1;
});

const two = document.querySelector('#two')
two.addEventListener('click', ()  => {
    display.textContent += 2;
});

const three = document.querySelector('#three')
three.addEventListener('click', ()  => {
    display.textContent += 3;
});

const four = document.querySelector('#four')
four.addEventListener('click', ()  => {
    display.textContent += 4;
});

const five = document.querySelector('#five')
five.addEventListener('click', ()  => {
    display.textContent += 5;
});

const six = document.querySelector('#six')
six.addEventListener('click', ()  => {
    display.textContent += 6;
});

const seven = document.querySelector('#seven')
seven.addEventListener('click', ()  => {
    display.textContent += 7;
});

const eight = document.querySelector('#eight')
eight.addEventListener('click', ()  => {
    display.textContent += 8;
});

const nine = document.querySelector('#nine')
nine.addEventListener('click', ()  => {
    display.textContent += 9;
});

const zero = document.querySelector('#zero')
zero.addEventListener('click', ()  => {
    display.textContent += 0;
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', ()  => {
    display.textContent = " ";
});

//console.log(operate(10, 5));
