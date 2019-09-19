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

database.ref().set({
    name: "",
    destination: "",
    nextArrival: "",
    frequency: ""
})

var newRow = function(data1,data2,data3,data4){
    var theRow = $("#allTrains").append("<tr class='newRow'>");
    var td1 = $("<td class='newItem'>").text(data1);
    var td2 = $("<td class='newItem'>").text(data2);
    var td3 = $("<td class='newItem'>").text(data3);
    var td4 = $("<td class='newItem'>").text(data4);
    //var td5 = $("<td class='newItem'>").text(data5);
    theRow.append(td1,td2,td3,td4);
}

// event listener for new data in database
database.ref().on("value", function (snapshot) {

    var newTrainName = snapshot.val().name;
    var newDestination = snapshot.val().destination;
    var newFrequency = snapshot.val().frequency;
    var newArrival = snapshot.val().nextArrival;
    
     // display values in a new row
    newRow(newTrainName,newDestination,newFrequency,newArrival); 
    console.log(newTrainName);
 })

// Event listenter for form submits
$("#submitButton").on("click", function (event) {
    event.preventDefault();
    // grab values from form
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    nextArrival = $("#trainTimeInput").val().trim();
    // push values to database
    database.ref().set({
        name: trainName,
        destination: destination,
        nextArrival: nextArrival,
        frequency: frequency
    })
    console.log(trainName);
})


