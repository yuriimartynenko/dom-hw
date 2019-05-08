const display = document.querySelector('.display');
const symbol = ['+', '-', '*', '/', '%', '.'];
let storageValue = [];

// Digits button
const digits = document.querySelectorAll('.digits button');
digits.forEach(btn => btn.addEventListener('click', digitPressed));
function digitPressed(e) {
    e.preventDefault();
    storageValue.push(e.target.innerText);
    display.value += e.target.innerText;
}

// Operators button
const opers = document.querySelectorAll('.opers button');
opers.forEach(btn => btn.addEventListener('click', operPressed));
function operPressed(e) {
    e.preventDefault();
    if (!symbol.includes(storageValue[storageValue.length - 1])) {
        storageValue.push(e.target.innerText);
        display.value += e.target.innerText;
    }
}

// Equal
document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    for (let i = 0; i < storageValue.length; i++) {
        if (storageValue[i] === '/' && storageValue[i + 1] === '0') {
            display.value = 'No! You can`t divide by zero';
            return;
        }
    }
    let result = storageValue.join('');
    display.value = eval(result);
    storageValue.length = 0;
}

// Clear
document.querySelector('.clear').addEventListener('click', clearSymbol);
function clearSymbol(e) {
    storageValue.length = 0;
}

// Backspace
document.querySelector('.back').addEventListener('click', backSpace);
function backSpace(e) {
    e.preventDefault();
    storageValue.pop();
    display.value = storageValue.join('');
}

// Number PI
document.querySelector('.pi').addEventListener('click', numPi);
function numPi(e) {
    e.preventDefault();
    const PI = (Math.PI).toFixed(2);
    storageValue.push(PI);
    display.value = storageValue.join('');
}

// Number e
document.querySelector('.e').addEventListener('click', numE);
function numE(e) {
    e.preventDefault();
    const numberE = (Math.E).toFixed(2);
    storageValue.push(numberE);
    display.value = storageValue.join('');
}
