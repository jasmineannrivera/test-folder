"use strict";
(function () {
    // A user can go out to the bar if they have more than $500 in their bank account and if it is not a school night.
    // write a function called canGoOut that accepts an account balance and a boolean for the day (IE whether it is a school night or Saturday/Sunday)
    // prompt the user for their account balance, confirm if it is a school night or not
    // and alert whether or not they can go out and get wrecked.
    // make a function with that stuff!


    // Define a function named isString that takes in any input and returns true if the input provided is a string.

    function isString(input) {
        return typeof input === "string";

    }

    // Define a function named notAString that takes in any input and returns true if the input provided is not a string.

    // Define a function named squareRoot that takes in a single input. If the input is a number or a numeric string, return the square root of the value.

    // Define a function named oppositeCase that takes in a string and returns the string in opposite case (ex oppositeCase("HeLLo") -> "hEllO")

    //Define a function named isOdd that takes in a single input. If the input is an odd number or a string containing an odd number, return true. Any other input should return false.
//radix === 10 parseInt(input, 10) % 2 !== 0
    function isOdd(input) {
      return parseInt(input) % 2 !== 0;
    }





    //In this challenge, you must verify the equality of two different
//In this challenge, you must verify the equality of two different
//     given parameters: a and b.

    function isEqual(a, b) {
        return a === b;
    }


    // Create a function that takes two numbers as arguments
// and return their sum.
    function sum(a, b) {
        return a + b;
    }














    //write a function that accepts two inputs (x, y). Return true if the sum of both numbers is less than 100, otherwise return false. (function lessThan100(a, b))

//     Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.
//
//         Examples
//     parityAnalysis(243) ➞ true
// // 243 is odd and so is 9 (2 + 4 + 3)
//
//     parityAnalysis(12) ➞ false
// // 12 is even but 3 is odd (1 + 2)
//
//     parityAnalysis(3) ➞ true
// // 3 is odd and 3 is odd and 3 is odd (3)


    //Write a JavaScript function called greaterNumber that accepts two numbers and returns the larger one


    //Write a JavaScript function that reverse a number. Go to the editor
    // Example x = 32243;
    // Expected Output : 34223





    function notNotNot(n, bool) {
        // return ((n % 2 === 0) && input2 === true) || (n % 2 !== 0 && input2 === false);
        return n % 2 !== 0 ? !bool : bool;


    }


    //function truthFalsy(datatype) {
    // return Boolean(dataType) === true ? 1 :0;
    // return x ? 1 : 0;
    //}


//Write a function that takes two integers (hours, minutes) and converts them into seconds.
    function toSeconds(hours, minutes) {
        return (hours * 3600) + (minutes * 60);
    }

})();



// Write a function called valueType that has two parameters. Jasmine will pass
// arguments into your function through the parameters.  Your function will need
// to compare the passed-in values and return a string based on that comparison, as follows:

// If the arguments are of the same type and have the same value, return "Exactly the same"

// If the arguments have the same value but are of different types, return "Same value, different types"

// In all other cases, return "Different values"







// If statements are all about making decisions based on certain parameters.
// Let's decide what you should wear today based on the temperature outside and the weather.
// Create a function called myOutfit that takes in a temperature and a weather parameter.
// <ul><li>If the temperature is greater than or equal to 72 and weather is "rainy" return "shorts and t-shirt, bring umbrella".
// </li><li>If the temperature is greater than or equal to 72 and the weather is "sunny" return "shorts and t-shirt".</li><li>
// If the temperature is less than 72 and the weather is "rainy" return "long pants and rain coat".
// </li><li>If the temperature is less than 72 and the weather is "sunny" return "long pants and sweater".</li>







// Create a function called exponent that takes in two parameters,
// the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many
// times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8






//Define a function named isOdd that takes in a single input. If the input is an odd number or a string containing an odd number, return true. Any other input should return false.
function isOdd(input) {
    if (typeof input === "string" && input % 2 !== 0) {
        return true;
    } else if (typeof input === "number" && input % 2 !== 0 ) {
        return true;
    } else {
        return false;
    }
}


function notNotNot(n, bool) {
    if ( n % 2 !== 0) {
        return !bool;
    }
        return bool;


}


//write a function that accepts two inputs (x, y). Return true if the sum of both numbers is less than 100, otherwise return false. (function lessThan100(a, b))

function isSum100(x, y) {
    return (x + y < 100 );

}


// #11 Write a function  called doubleTheFun that takes 1 parameter. It should double numbers, and
// repeats strings. example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'




// #15 Create a function called outside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 80 and humidity over 40 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icicles"
    temperature over 80 and humidity under 40 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 80 or humidity over 50 or cloudiness over 50 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/



// Write a function that takes in 2 parameters. If both parameters are the same type an the same value return "Exact match". If both parameters have the same value but are different types return "Different types" Otherwise return "Different values"





// Write a function that uses a loop to console.log "99 bottles of beer on the wall" until the passed argument number. Use a break to exit the loop, and console.log the message "Aw no, we're not doing that song again," in the event the argument is a number greater than 99, or is not a number.


// Write a loop that prompts the user to confirm if they have drank water today. This loop should run until the user has confirmed the prompt (clicked yes) 6 times.




// Write a loop that will console.log hexadecimal numbers until it reaches 'FF'. Take a look at this stackoverflow post for information on converting decimal numbers to hexadecimal.  https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript




// Write a function called sum  that will return the sum of an unknown number of arguments





// Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// // Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"




// Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.
//
//     Examples
// equal(3, 4, 3) ➞ 2
//
// equal(1, 1, 1) ➞ 3
//
// equal(3, 4, 1) ➞ 0
// Notes
// Your function must return 0, 2 or 3.