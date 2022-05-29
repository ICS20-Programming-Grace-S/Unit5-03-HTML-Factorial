// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict';

/**
 * This function displays product of factorial
 */
function factorial() {
  
  // Variables for user's number and message at the end
  let numberFactorial = parseInt(document.getElementById('user-integer').value);

  // Initializes Variables 
  let message = "";
  let counter = numberFactorial

  // IF statement to make sure the user inputted a valid number
  if (numberFactorial >= 0) {
    
    // IF statement to check if the user inputted a 1 or 0
    if (numberFactorial != 0 && numberFactorial != 1) {

      // DO WHILE loop to calculate factorial
      do {
        counter--;
        numberFactorial = numberFactorial * counter;
      } while (counter > 1);
      message = "The factorial of this number: " + numberFactorial;
      
      // IF the user entered 0 or 1
    } else {
      message = "The factorial of this number: 1"
    }
    // IF user did not enter a number
  } else {
    message = "Please enter a valid number in the input box!";
  }
  
  // Displays factorial of number inputted (or error message)
  document.getElementById("output").innerHTML = message;
}