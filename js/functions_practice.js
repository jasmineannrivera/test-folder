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
    function boilingPoint(temp) {
        if (temp > 212) {
            console.log(temp + " is below boiling point");
        } else if (temp === 212) {
            console.log(temp + " is at boiling point");
        } else if (temp < 212) {
            console.log(temp + " is below boiling point");
        } else {
            console.log("huh?");
        }
    }
        boilingPoint("r");




// Create a function called equal that takes three integer arguments (a, b, c) and returns the number of equal values.
//
//     Examples
// equal(3, 4, 3) ➞ 2
//
// equal(1, 1, 1) ➞ 3
//
// equal(3, 4, 1) ➞ 0
// Notes
// Your function must return 0, 2 or 3.







// write a function called divisibleBy3


        function divisibleBy3(input) {
            return input % 3 === 0;
        }


        


        function isPurple(color) {
            return typeof color ==="string" && color === "purple";

        }

function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";

    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join('');
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";

    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

console.log(palindrome("A man, a plan, a canal. Panama"));




function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama");






// function equal(a, b, c) {
//     if (a === b && a === c) {
//         return 3;}
//     if (a === b || a === c || b === c) {
//         return 2;}
//     return 0;
// }




// function isPalendrome(input) {
//     var re = /[\w_]/g;  						//establishes unwanted characters.
//     var lowRegStr = input.toLowerCase().replace(re, '');		//removes unwanted characters.
//     var revStr = lowRegStr.split('').reverse().join('');		//reverses scrubbed string.
//     return revStr === lowRegStr;					//checks if letters are same forward or backwards.
// }
// 9:01
// function isPalendrome(input) {
//     var re = /[\w_]/g;  						//establishes unwanted characters.
//     var lowRegStr = input.toLowerCase().replace(re, '');		//removes unwanted characters.
//     var revStr = lowRegStr.split('').reverse().join('');		//reverses scrubbed string.
//     return revStr === lowRegStr;					//checks if letters are same forward or backwards.
























// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
//     "0 is even"
//     "1 is odd"
//     "2 is even"


    for (var i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }



// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

    function filterNumbers(arr) {
        function numbers(x) {
            return typeof x === "number";
        }
        return arr.filter(numbers).sort(function(a, b){return a-b});


    }

    console.log(filterNumbers(["fred", true, 20, 5]));






// Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
    var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ];
    function getOlder(dogs) {
        for (var i = 0; i < dogs.length; i++) {
            dogs[i].age += 1;
        }

        return dogs;
    }

console.log(getOlder(dogs));



// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];


    function washCars(cars) {
        for (var i = 0; i < cars.length; i++) {
            cars[i].isDirty = false;
        }

    }

// +=2 inside for loop will make it go every other

// Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

    function adminList(users) {
        var count = 0;
        for (var i = 0; i < users.length; i++) {
            if (users[i].isAdmin === true) {
                ++count;
            }
        }
        return count;
    }

console.log(adminList(users));

// Refactor to return an array of admin-only user emails

function adminEmails(users) {
    var emails = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true) {
            emails.push(users[i].email);
        }
    }
    return emails;

}

console.log(adminEmails(users));



// Refactor again to return an array of user objects that are admins


function userObjects(users) {
    var adminObjects = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true) {
            adminObjects.push(users[i]);
        }

    }
    return adminObjects;
}

console.log(userObjects(users));



// Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

    function makeSandwichObjects(breads, fillings) {
        var newArray = [];
        for (var i = 0; i < breads.length && fillings.length; i++) {
            newArray.push({bread: breads[i], filling: fillings[i]})
        }
        return newArray;


    }

console.log(makeSandwichObjects(breads, fillings));
var people = [
    "Jeff",
    "Bryce",
    "Kate",
    "Jasmine"
];
var traits = [
    "Awesome and funny",
    "Homeboy",
    "Thunder-fun",
    "Fabulous"
];

function frans(people, traits) {
    var newArray = [];
    for (var i = 0; i < people.length && traits.length; i++) {
        newArray.push({person: people[i], trait: traits[i]})
    }
    return newArray;

    }

console.log(frans(people, traits));

//Write a function named remove3s that accepts and array of numbers and returns an array with all of the same numbers except for 3

function remove3s(array) {
    var numArray = [];
     array.forEach(function (num) {
        if(num !== 3){
            numArray.push(num)
        }
    });
    return numArray;
}


console.log(remove3s([1, 2, 3, 3, 3, 4, 5]));


// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
//
//     Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]



// Create a function that takes a string and returns the word count. The string will be a sentence.

function wordCount(str){
    return str.split(" ").length;
}

console.log(wordCount("This is four words"));



<!-- forEach loop format -->
function nameofFunction(x) {
    x.forEach(function (item){
        //do whatever you want done to each item;
    });
    return x;
}



// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"


function keepYellow(arr) {
    var yellowArray = [];
    arr.forEach(function (str) {
        if(str.toLowerCase() === "yellow"){
            yellowArray.push(str)
        }
    });
    return yellowArray;

}
console.log(keepYellow(["yellow", "red", "blue", "Yellow", "black", "brown", "yellow"]));



//Write a function named 'double' that accepts a number and returns the number squared.
//Write a function named remove3s that accepts and array of numbers and returns an array with all of the same numbers except for 3
//Write a function named sumAll that returns the sum of all numbers in an array
//write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.
//write a function called stringLength that returns the length of a string, if the input is not a string, return false;
// Create a function that takes a string and returns the word count. The string will be a sentence.
// 6:41
// Those are the questions
// 6:42
// The ANSWERS
// function isNegative(number) {
//     return parseFloat(number) < 0;
// }
function isTen(number) {
    return parseFloat(number) === 10;
}
//Write a function named 'double' that accepts a number and returns the number squared.
function double(num) {
    return parseFloat(num) * parseFloat(num);
//    or: Math.pow(num,2);
}
//Write a function named remove3s that accepts and array of numbers and returns an array with all of the same numbers except for 3
function remove3s(array) {
    var numArray = [];
    numbers.forEach(function (num) {
        if(num !== 3){
            numArray.push(num)
        }
    })
}
//Write a function named sumAll that returns the sum of all numbers in an array
function sumAll(array) {
    var sumArray = [];
    for(var i = 0; i < array.length; i++){
        sumArray += array[i];
    }
    return sumArray
}
//write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.
function countEvens (array) {
    var evens = 0;
    arr.forEach(function (x) {
        if (x % 2 === 0){
            evens++;
        }
        return evens;
    })
}
//write a function called stringLength that returns the length of a string, if the input is not a string, return false;
function stringLength(input) {
    if (typeof input === "string"){
        return input.length;
    }else {
        return false;
    }
}
// Create a function that takes a string and returns the word count. The string will be a sentence.
function countWords(str){
    return str.split(" ").length;
}

