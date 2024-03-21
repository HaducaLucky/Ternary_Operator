// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let age = 18;
let messageAM = age >= 18 ? "You're an adult" : "You're a minor";

console.log(messageAM);

let time = 9;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";

console.log(greeting);

let student = true;
let message = student ? "You are student" : "You are NOT a student";

console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`You total is $${purchaseAmount - purchaseAmount * discount / 100}`);