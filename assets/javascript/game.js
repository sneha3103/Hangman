alert("Hello");

//Variables and Arrays

var countryChoices = ["switzerland", "canada" , "china" , "india" , "ireland" , "iceland" , "spain" , "malaysia" , "germany" , "greece" , "venezuela" , "zimbabwe" , "vietnam" , "sweden"];

var selectedCountry = ""; //This holds the country name 
var numBlank = 0; //This is the blanks that represent the countries
var lettersinCountry = [];
var blankandcorrect = []; //This holds the blanks and the letters guessed correct
var wrongGuesses = [];
var winCount = 0;
var guessesLeft = 10;

//Functions

function game () {
    selectedCountry = countryChoices[Math.floor(Math.random() * countryChoices.length)];

    lettersinCountry = selectedCountry.split("");

    numBlank = lettersinCountry.length;

    //Need to reset for each round
    guessesLeft = 10;
    wrongGuesses = [];
    blankandcorrect =[];

    //Populate blankandcorrect with right number of blanks
    for (var i=0; i<numBlank; i++) {
        blankandcorrect.push("_");
    }

    //Add .innerHTML to allow conditions to appear on HTML site
    document.getElementById("currentword").innerHTML = "Current Word: " +  blankandcorrect.join("  "); 
    document.getElementById("userguesses").innerHTML = "Letters already guessed: " + wrongGuesses.join(" , ");
    document.getElementById("guesses1").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("wins1").innerHTML = "Wins: " +  winCount;
    
    console.log(numBlank);
    console.log(selectedCountry); 
    console.log(lettersinCountry);
    console.log(blankandcorrect);
}

//A function to check if the letter the user has guessed matches with the letter in the country that computer picks. 
function checkLetter(letter) {

    var letterInCountry = false;

    for (var i=0; i<numBlank; i++) {
        if(selectedCountry[i] == letter) {
            letterInCountry = true;
            
        }
    }

    //Once the letter is found, we need to check where the letter exists in the Country and populate the blank and correct array
    if(letterInCountry) {
        for (var i=0; i<numBlank; i++) {
            if(selectedCountry[i] == letter) {
                blankandcorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuesses.push(letter);
        guessesLeft--
    }

    console.log(blankandcorrect);

}

// This is for the function to iterate and for it to reflect on the win count and guesses left. 
function completedRound () {
    console.log("Win count: " + winCount + " | Letters Already Guessed: " + wrongGuesses + " | Guesses Left " + guessesLeft);

    document.getElementById("guesses1").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("currentword").innerHTML = "Current Word: " + blankandcorrect.join(" ");
    document.getElementById("userguesses").innerHTML  ="Letters already guessed: " + wrongGuesses.join(" , ");

    //Need to check if user has won
    if(lettersinCountry.toString() == blankandcorrect.toString()) {
        winCount++;
        alert("Yay! You won!!");

        document.getElementById("wins1").innerHTML = winCount;

        game();
    }

    else if (guessesLeft == 0) {
        wrongGuesses++;
        alert("You lost");

        document.getElementById("guesses1").innerHTML = wrongGuesses;

        game();
    }
}   

game ();

 // When user presses a key, it should populate in the html site. 
 document.onkeyup = function(event) {
    var letterPicked = String.fromCharCode(event.keyCode).toLowerCase(); 
    checkLetter(letterPicked);
    completedRound();

    console.log(letterPicked);
 }

 