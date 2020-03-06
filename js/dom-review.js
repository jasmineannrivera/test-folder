"use strict";
// - Allow the user to type in their favorite food into the input and append it
// to the list once the button is clicked.
//
$("#add-to-list").click(function () {

    var userInput = $("#input").val();
    $("#input").val("");
    $("#favorite-food").append("<li>" + userInput + "</li>");

    $("input"),keyup(function (e) {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();
            if($("#input").val() !== "") {
                var userInput = $("#input").val();
                $("#favorite-food").append("<li>" + userInput + "</li>");
                $("#input").val("");
            }}
    })

});
// - When the heading 'Change Me' is double clicked, change its
// background-color to purple.
//
$("#change-me").dblclick( function () {
    $("#change-me").css("background-color", "purple");
});
// - Allow the user to input their cohort name. Once Update button is clicked,
//     the text should should update with the name of the cohort.
//
$("#change-cohort").click(function () {
    var cohort = $("#cohort-name").val();
    $("#my-cohort").html(cohort);
});
//     ```$xslt
// My Cohort: Fortuna
// ```
//
// - When 'Highlight' button is clicked, change the background color of the
// cohort name to yellow.
//
$("#highlight").click(function () {
    $("#my-cohort").css("background-color", "yellow");
});
// - Write some JavaScript that changes the background-color of the container to
// pink after 3 seconds.
var delay = 3000;
var timeoutID = setTimeout( function () {
    $(".container").css("background-color", "pink");}, delay);

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);



//Clicking on the button the font, font size, and color of the paragraph text will be changed.
$("#jsstyle").click(function () {
    $("#text").css({
        "font": "sans-serif",
        "font-size": "18px",
        "color": "blue"

    });
});



//<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>


