"use strict";

//FizzBuzz

//
// function FizzBuzz() {
//     for (var i = 1; i <= 100; i++) {
//         var result = "";
//         if (i % 3 === 0) {
//             result += "Fizz";
//         } if (i % 5 === 0) {
//             result += "Buzz"
//         } if (result === "") {
//             result = i;
//         }
//         console.log(result);
//     }
//
// }
//
// FizzBuzz();



//Fizzbuzz again

//
// function fizzBuzz () {
//     for(var i = 1; i <= 100; i++) {
//         var result = "";
//         if (i % 3 === 0) {
//             result += "Fizz";
//         } if (i % 5 === 0) {
//             result += "Buzz";
//         } if (result === "") {
//             result = i;
//         }
//         console.log(result);
//     }
// }
//
// fizzBuzz();
//




function fizzBuzz () {
    for(var i = 1; i <= 100; i++) {
        var result = "";
        if (i % 3 === 0) {
            result += "Fizz";
        } if (i % 5 === 0) {
            result += "Buzz";
        } if (result === "") {
            result = i;
        }
        console.log(result);
    }
    return result;
}

fizzBuzz();















