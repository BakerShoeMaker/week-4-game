//1- Establish variables
var keyPressed;
var wins = 0;
var losses = 0;
var gameNumber ="";
var gameScore = 0;
var imageClickArray = [];
var message = "";

//2 - First scene: user sees button that says click to star game.
//loadPage
function loadPage(){

    //message = "<button type='button' class='btn btn-success' id="StartButton">Click to Start Game</button>";
    message = "Press any key to start!";
    $("#MessageArea").html(message);
    $("#numberarea").html("");
    $("#YourScoreIs").html("");
    $(document).keypress( function () {
        console.log("You pressed the key!");
        startGame();
    })
}

//Waits for the user to press the key.
function onKeyPress(event) {
    keyPressed = event.key;
    document.onkeyup = function(){
        console.log("You pressed the :" +keyPressed +" key.");
    }
}


//Start the game
function startGame(){
    console.log("The game has started!");
    gameNumber = "";
    imageClickArray = [];
    $("#WinsLoses").html("Wins: " +wins +"   |   " +"Losses: " + losses);
    $("#MessageArea").html("");
    $("#NumberArea").html("RN");
    $("#YourScoreIs").html("Your score is: " +gameScore);
    //Generate the game number once.
    //Add event listener for each image.
    //Generate the worth of each image.
}



$(document).ready(function () {
    loadPage();
});

//document.getElementById("StartArea").innerHTML = "<button type="button class="btn btn-primary">Click to Start
// </button>"

//3 - User clicks and the game starts
//4 - The following things happen:
        //a- The gameNumber is generated.
        //b - Each image is given a value
        //c - An eventListener is created to listen for the following:
                //1- image_1 is clicked
                //2- image_2 is clicked
                //3- image_3 is clicked
                //4- image_4 is clicked
                //* All values of the clicked image are put in an array: imageClickedArray.

        //d- When the image is clicked the a function is run to check the sum of the values in the array.
                //1- If (imageClickArray) == the gameNumber then they win.
                        //a- End of game message appear saying "You win!"
                        //b - win++1
                        //c - numbersArray, imageClickArray are reset.
                        //d - button appears saying, "Play again"

                //2 - If imageClickArray < sum of gameNumber then they are allowed to keep clicking.


                //3- If imageClickArray > sum of gameNumber then they game is over.
                        //a-Message appears saying your loses,
                        //b- button (or message) appears saying click to play again.
                                //1- Game starts over.
                                        //a - All variables are reset.