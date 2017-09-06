//1- Establish variables
var keyPressed;
var wins = 0;
var losses = 0;
var gameNumberTextfield ="";
var gameScore = 0;

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

    // $(document).keypress( function () {
    //     console.log("You pressed the key!");
    //     startGame();
    // })
}

//Waits for the user to press the key.
// function onKeyPress(event) {
//     keyPressed = event.key;
//     document.onkeyup = function(){
//         console.log("You pressed the :" +keyPressed +" key.");
//     }
// }

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
    console.log("The game has started!");
    gameNumberTextfield = "";
    imageClickArrayNumbers = [];
    $("#WinsLoses").html("Wins: " +wins +"   |   " +"Losses: " + losses);
    $("#MessageArea").html("");
    gameNumber();
    $("#NumberArea").html(gameNumberTextfield);


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

    function getSum(total, num) {
        return total + num;
    }

    finalNumber = imageClickArrayNumbers.reduce(getSum);

    console.log(finalNumber);

    // for(var i = 0 ; i< imageClickArrayNumbers.length ; i++)
    // {
    //
    // finalNumber =
    // }

}

//Checks for the winner
function checkForWinLoss()
{
    if(gameNumberTextfield == finalNumber){
        //you win message!
        //reset game variables, arrays
        //Put a restart game button
    }
    if(gameNumberTextfield > finalNumber){

        //keep playing
    }
    if(gameNumberTextfield > finalNumber){
        //You lose message!;
        //reset game variables, arrays
        //Put a restart game button
    }



}


$(document).ready(function () {
    loadPage();
});

//document.getElementById("StartArea").innerHTML = "<button type="button class="btn btn-primary">Click to Start
// </button>"

//3 - User clicks and the game starts
//4 - The following things happen:
        //a- The gameNumberTextfield is generated.
        //b - Each image is given a value
        //c - An eventListener is created to listen for the following:
                //1- image_1 is clicked
                //2- image_2 is clicked
                //3- image_3 is clicked
                //4- image_4 is clicked
                //* All values of the clicked image are put in an array: imageClickedArray.

        //d- When the image is clicked the a function is run to check the sum of the values in the array.
                //1- If (imageClickArrayNumbers) == the gameNumberTextfield then they win.
                        //a- End of game message appear saying "You win!"
                        //b - win++1
                        //c - numbersArray, imageClickArrayNumbers are reset.
                        //d - button appears saying, "Play again"

                //2 - If imageClickArrayNumbers < sum of gameNumberTextfield then they are allowed to keep clicking.


                //3- If imageClickArrayNumbers > sum of gameNumberTextfield then they game is over.
                        //a-Message appears saying your loses,
                        //b- button (or message) appears saying click to play again.
                                //1- Game starts over.
                                        //a - All variables are reset.