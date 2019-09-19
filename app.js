// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7fjehvkaf_vSv7gNraqVrvR-7kx14HbY",
    authDomain: "train-timetable-fe0ff.firebaseapp.com",
    databaseURL: "https://train-timetable-fe0ff.firebaseio.com",
    projectId: "train-timetable-fe0ff",
    storageBucket: "",
    messagingSenderId: "261331242637",
    appId: "1:261331242637:web:1543dc1b702f47170f9cc4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Intialize variables
var trainName = "";
var destination = "";
var frequency = "";
var nextArrival = "";
var minsAway = "whatevs";
var database = firebase.database();



// Event listenter for form submits
$("#submitButton").on("click", function (event) {
    event.preventDefault();
    // grab values from form
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    nextArrival = $("#trainTimeInput").val().trim();
    // push values to database
    var newTrain = {
        name: trainName,
        destination: destination,
        nextArrival: nextArrival,
        frequency: frequency
    }
    database.ref().push(newTrain);
    })


   // event listener for new data in database
    database.ref().on("child_added", function (snapshot) {
    
        var newTrainName = snapshot.val().name;
        var newDestination = snapshot.val().destination;
        var newFrequency = snapshot.val().frequency;
        var newArrival = snapshot.val().nextArrival;
        
         // display values in a new row
        // newRow(newTrainName,newDestination,newFrequency,newArrival); 
        var row = $("<tr class='newRow'>");
    var td1 = $("<td class='newItem'>").text(newTrainName);
    var td2 = $("<td class='newItem'>").text(newDestination);
    var td3 = $("<td class='newItem'>").text(newFrequency);
    var td4 = $("<td class='newItem'>").text(newArrival);
    //var td5 = $("<td class='newItem'>").text(data5);
    $("#allTrains").append($(row).append(td1,td2,td3,td4));
     })

