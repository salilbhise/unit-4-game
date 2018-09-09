// Declaring variables
var wins = 0;
var losses = 0;

// Starting score for user is 0
var score = 0;

// Random number to start game
var random = Math.floor((Math.random()* 100)+ 19);

// Random numbers for each crystal
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);
console.log("1 is " +crystal1);
console.log("2 is " +crystal2);
console.log("3 is " +crystal3);
console.log("4 is " +crystal4);

// Update score, wins, and losses
var updatedScore = function() {
	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);

	$('.score').empty();
	$('.score').append(score);

}

// Game restarts at 0 
var restartGame = function() {
	score = 0;
	random = Math.floor((Math.random()* 100)+ 19);

	$('.random').empty();
	$('.random').append(random);

	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);
	

	updatedScore();

}

// Game process statements
var gameProcess = function() {
	if(score == random) {
		wins = wins + 1;
		alert("You Win!");
		restartGame();
	}
	else if (score > random) {
		losses = losses + 1;
		alert("You Lost!");
		restartGame();
	}
	else {
		updatedScore();
	}

}

// Update results
$('.random').append(random);
$('.score').append(score);


// Add numbers to score when crytals are clicked
$(document).ready(function(){
	$('#crystal1').click(function(){
 		score = score + crystal1;
 		gameProcess();
 	})

 	$('#crystal2').click(function(){
 		score = score + crystal2;
 		gameProcess();
 	})

 	$('#crystal3').click(function(){
 		score = score + crystal3;
 		gameProcess();
 	})

 	$('#crystal4').click(function(){
 		score = score + crystal4;
 		gameProcess();
 	})

});