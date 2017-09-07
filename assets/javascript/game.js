//1- Establish variables
var keyPressed;
var wins = 0;
var losses = 0;
var gameNumberTextfield ="";
//var gameScore = 0;

var imageNumber1 = 0;
var imageNumber2= 0;
var imageNumber3 = 0;
var imageNumber4 = 0;

var imageClickArrayNumbers = []; //The value of the images are put in this array.
var finalNumber = 0;

var message = "";

//2 - First scene: user sees button that says click to star game.
//loadPage
function loadPage(){

    //message = "<button type='button' class='btn btn-success' id="StartButton">Click to Start Game</button>";
    // message = "Press any key to start!";
    // $("#MessageArea").html(message);
    $("#numberarea").html("");
    $("#YourScoreIs").html("");
    $("#buttonID").click(function () {
        $(this).remove();
        startGame();
    });


}

//Waits for the user to press the key.
function onKeyPress(event) {
    keyPressed = event.key;
    document.onkeyup = function(){
        startGame();
    }
}

//Generate random number for the game number textfield
function gameNumber(){
    gameNumberTextfield =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(gameNumberTextfield);
    return gameNumberTextfield;

}
//Generates the value for each image
function calculateImageValues()
{
    imageNumber1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    imageNumber2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    imageNumber3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    imageNumber4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    //console.log(imageNumber1);
}

//Start the game
function startGame(){
    //Rest all the variables

    imageNumber1 = 0;
    imageNumber2= 0;
    imageNumber3 = 0;
    imageNumber4 = 0;

    imageClickArrayNumbers = []; //The value of the images are put in this array.
    finalNumber = 0;
    gameNumberTextfield = 0;

    imageClickArrayNumbers = [];
    $("#WinsLoses").html("Wins: " +wins +"   |   " +"Losses: " + losses);
    $("#MessageArea").html("");
    gameNumber();
    $("#NumberArea").html(gameNumberTextfield);
    $("#YourScoreIs").html("Your score is: " +finalNumber);

    calculateImageValues();
    //Add event listener for each image.
    $("#image_1").click( function(){
        imageClickArrayNumbers.push(imageNumber1);
        console.log(imageClickArrayNumbers);
        addNumbersInArray();
        checkForWinLoss();
        $("#YourScoreIs").html("Your score is: " +finalNumber );
    });
    $("#image_2").click( function(){
        imageClickArrayNumbers.push(imageNumber2);
        console.log(imageClickArrayNumbers);
        addNumbersInArray();
        checkForWinLoss();
        $("#YourScoreIs").html("Your score is: " +finalNumber );
    });

    $("#image_3").click( function(){
        imageClickArrayNumbers.push(imageNumber3);
        console.log(imageClickArrayNumbers);
        addNumbersInArray();
        checkForWinLoss();
        $("#YourScoreIs").html("Your score is: " +finalNumber );
    });
    $("#image_4").click( function(){
        imageClickArrayNumbers.push(imageNumber4);
        console.log(imageClickArrayNumbers);
        addNumbersInArray();
        checkForWinLoss();
        $("#YourScoreIs").html("Your score is: " +finalNumber );
    });
    //Generate the worth of each image.
}
//Adds clicked (images) numbers in array
function addNumbersInArray()
{

    function getSumOfArray(total, num)
    {
        return total + num;
    }

    finalNumber = imageClickArrayNumbers.reduce(getSumOfArray);
    console.log(finalNumber);

}

//Checks for the winner
function checkForWinLoss()
{
    if(finalNumber == gameNumberTextfield){
        //Make the image clicks inactive
        $("#image_1").click(false);
        $("#image_2").click(false);
        $("#image_3").click(false);
        $("#image_4").click(false);

        wins++;

        $("#WinsLoses").html("Wins: " +wins +"   |   " +"Losses: " + losses);
        $("#MessageArea").html("<i class= 'fa fa-thumbs-o-up' aria-hidden='true'></i>" + " Congratulations! You win! Press any key to play again.");
        $(document).keypress( function () {
            startGame();
            //onKeyPress();
        });
    }
    if(gameNumberTextfield > finalNumber){

        //keep playing
    }
    if( finalNumber > gameNumberTextfield){
        //Make the image clicks inactive
        $("#image_1").click(false);
        $("#image_2").click(false);
        $("#image_3").click(false);
        $("#image_4").click(false);
        losses++;
        $("#WinsLoses").html("Wins: " +wins +"   |   " +"Losses: " + losses);
        $("#MessageArea").html("<i class= 'fa fa-thumbs-o-down' aria-hidden='true'></i>" +" You lost. Press any key to play again.");
        $(document).keypress( function () {
            startGame();
        });

    }



}

$(document).ready(function () {
    loadPage();
});

