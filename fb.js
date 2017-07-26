// Initialize Firebase (YOUR OWN APP)
var config = {
    apiKey: "AIzaSyDkH9cR-z6fh8MFKe66ZZg2C2D46x8LsaY",
    authDomain: "kr-firebase-awesomeness.firebaseapp.com",
    databaseURL: "https://kr-firebase-awesomeness.firebaseio.com",
    projectId: "kr-firebase-awesomeness",
    storageBucket: "kr-firebase-awesomeness.appspot.com",
    messagingSenderId: "966299167112"
};

firebase.initializeApp(config);

// Variables
// ================================================================================

// Get a reference to the database service
var database = firebase.database();
// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.

$(document).ready(function(){
    
})
// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

    // Reduce the clickCounter by 1


    // Alert User and reset the counter


    // Save new value to Firebase


    // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

    // Set the clickCounter back to initialValue


    // Save new value to Firebase


    // Log the value of clickCounter


    // Change the HTML Values

});