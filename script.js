//script js
let currentInput = '';
let operation = null;
let previousInput = '';


function appendNumber(number) {
    currentInput += number;
    //console.log("Appended Number");
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    //console.log("set operation");
}

function setOperation(op) {
    if (currentInput === '') return; // If no input, return
    if (previousInput !== '') calculate(); // If previous input exists, calculate
    operation = op; // Set the operation
    previousInput = currentInput; // Save the current input as previous input
    currentInput = ''; // Reset current input
    //console.log("Set Operation:", operation); // Debug
}

function calculate() {
    if (operation === null || currentInput === ''){ 
        //console.log("No operation to perform or current input is empty.")
        return;} // Return if no operation or input

    let result;
    const prev = parseFloat(previousInput); // Parse previous input
    const current = parseFloat(currentInput); // Parse current input

    if(isNaN(prev)||isNaN(current)){
      //console.log("Calculating:", prev, operation, current); // Debug
      return;//ivalid inputs
    }

    //console.log("Calculating:", prev, operation, current);//debug
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current; // Handle division by zero
            break;
        default:
            return;
    }

    currentInput = result.toString(); // Save result as current input
    operation = null; // Reset operation
    previousInput = ''; // Clear previous input
    //console.log("Result:", result); // Debug
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    //console.log("Cleared Display"); // Debug
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || '0'; // Display the current input or 0 if empty
    //console.log("Display Updated:", currentInput); // Debug
}
