console.log("hello world!");
alert("hello!");

//
//1- Establish variables
//2 - First scene: user sees button that says click to star game.
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