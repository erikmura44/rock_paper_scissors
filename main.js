var choices = ["Rock","Paper","Scissors"];
var userScore = 0;
var computerScore = 0;


$(document).ready(function(){
   $(".button").on("click", function(){
      var userChoice = $(this).val();
      var computerChoice = choices[Math.floor(Math.random() * choices.length)];
   $(".computerChoice").text("You chose " + userChoice + " and the computer chose " + computerChoice);
   $(".output").text("The computer chose " + computerChoice);
      if(userChoice == computerChoice){
         $(".output").text("TIE!");
      }
     else if((userChoice == "Rock" && computerChoice == "Scissors") || (userChoice == "Paper" && computerChoice == "Rock") || (userChoice    == "Scissors" && computerChoice == "Paper")){
        $(".output").text("You Win!");
       userScore += 1;
     }
     else {
       $(".output").text("You Lose!");
       computerScore += 1;
     }
     $(".userScore").text("Your Score: " + userScore);
     $(".computerScore").text("Computer Score: " + computerScore);
   });
 });
