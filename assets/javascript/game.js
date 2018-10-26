// Create varialbles
var wins = 0;
var losses = 0;

var totalScore;
var targetNumber;
var scoreCrystal1;
var scoreCrystal2;
var scoreCrystal3;
var scoreCrystal4;

// Create reset function
function reset() {

    // Generate random target number and numbers for each crystal. Set totalScore to 0. 
    totalScore = 0;
    targetNumber = 19 + Math.floor(Math.random() * 101);
    scoreCrystal1 = 1 + Math.floor(Math.random() * 12);
    scoreCrystal2 = 1 + Math.floor(Math.random() * 12);
    scoreCrystal3 = 1 + Math.floor(Math.random() * 12);
    scoreCrystal4 = 1 + Math.floor(Math.random() * 12);

    // Add a new element value to each crystal and set value equal to randomly generated numbers
    $("#crystal1").attr("value", scoreCrystal1);
    $("#crystal2").attr("value", scoreCrystal2);
    $("#crystal3").attr("value", scoreCrystal3);
    $("#crystal4").attr("value", scoreCrystal4);

    // Update user display with nessasry data
    $("#targetNumber").text(targetNumber);
    $("#totalScore").text(totalScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    console.log(scoreCrystal1);
    console.log(scoreCrystal2);
    console.log(scoreCrystal3);
    console.log(scoreCrystal4);
    console.log("-----");
}

// Create function to listen to user's clicks and provide results
function startGame() {

    // On user's click on each crystal add data from value attribute that corespondents to crystal user clicked to totalScore. 
    // Convert data from value attribute to integer.  
    // Check if user won or lost, reset the targetNumber and totalScore. 

    $(".img-thumbnail").on("click", function () {
        totalScore = totalScore + parseInt($(this).attr("value"));
        $("#totalScore").text(totalScore);

        if (totalScore > targetNumber) {
            losses++;
            reset();
        }
        else if (totalScore === targetNumber) {
            wins++;
            reset();
        };
    });
};

$(document).ready(function () {
    reset();
    startGame();    
});
