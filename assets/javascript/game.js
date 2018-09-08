// declaring variables 
var wins = 0;
var losses = 0;

// beginning score for user
var score = 0;

// generating a random number to start the game
var random = Math.floor((Math.random()* 100)+ 19);

//generating random numbers for the crystals
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);
console.log("1 is " +crystal1);
console.log("2 is " +crystal2);
console.log("3 is " +crystal3);
console.log("4 is " +crystal4);

// updating score total, wins, and losses
var updatedScore = function() {
	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);

	$('.score').empty();
	$('.score').append(score);

}

// back to 0 after the game restarts
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

// game process 
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

// updating results
$('.random').append(random);
$('.score').append(score);


// adding numbers to final scores when crystals are clicked
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