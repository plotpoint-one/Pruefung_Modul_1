const prompt = require("prompt-sync")()
// Implement flowchart "Calculator" here.


const num1 = parseFloat(prompt("First Number: "));
console.log(num1);

const operator = prompt("Operator: ");
console.log(operator); 

const num2 = parseFloat(prompt("Second Number: "));
console.log(num2); 

switch (operator) {
    case '+':
        console.log(num1 + num2); 
        break;
    case '-': 
        console.log(num1 - num2);
        break; 
    case '*':
        console.log(num1 * num2);
        break;
    default:
        if (num2 === 0) {
            console.log("Division by zero is not allowed")
        } else {
            console.log(num1 / num2)
        }
        break;
}

// First number
// Operation (+, -, *, /): ")
// Second number

// Possible outcomes:
// - Invalid input, try again
// - Division by zero is not allowed
// - or the result of the operation