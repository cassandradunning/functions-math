// Book 2: Functions Math (Add and Multiply)
// You need to write two functions

/*FUNCTION ONE
1. A function to add two values together. 
This function needs to define two parameters - 
the two numbers that you want to add together.
*/

const addition = (numOne, numTwo) =>  {
const plus = numOne + numTwo;
return plus;
}
/*
3. In the adding function, add the values of the two 
parameters and return the result. */

let result = addition(4,14)
// console.log(result);

// Prints: 18

/* FUNCTION TWO
2. A function to multiply a single number by 2. 
This function takes one parameter - the number you 
want to multiply by 2. */

const multiply = (num) => {
    const times = num * 2;
    return times;
}
/* 4. In the multiplication function, multiply the value 
of the single parameter by 2 and return the result. */

let result2 = multiply(result);
console.log(result2);

// Prints: 26


/* After the functions are defined, invoke them in the correct order.

1. Invoke the adding function, provide two values as arguments, 
and the store what gets returned into a variable. 

2. Then invoke the multiplication function and provide the variable
 from the PREVIOUS STEP as the argument. Store the result into a 
 variable. */



