$(document).ready(function() {

	// function that generates a random number each time the page loads (set min and max)

	function randomNumber() {
		var min=20;
		var max=100;
		return Math.floor(Math.random()*(max-min+1) + min);
	}

	// append random number to "#random-number"

	$("#random-number").append(randomNumber);


	// counter to keep track of score
	var counter = 0

	// function that generates random number between 1 and 5
	function randomScore() {
		var min=1;
		var max=5;
		return Math.floor(Math.random()*(max-min+1) +min);
	}

	// add on-listener to each element with class ".crystal"
	// assign randomScore to crystal image 
	// when crystal is clicked, increase counter by its randomScore attribute
	// convert randomScore to integer value so that it can be added to the score

	$(".crystal").on("click", function() {

		crystal.attr("crystalScore",randomScore);

		var crystalValue = ($(this).attr("crystalScore"));
	    crystalValue = parseInt(crystalValue);

	    console.log(crystalValue);
	    counter += crystalValue;
	})

	$("your-score").append(crystalValue);

});
