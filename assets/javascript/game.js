$(document).ready(function() {

	// defining global variables

	var counter = 0
	var yourScore = 0
	var wins = 0
	var losses = 0
	var scoreOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var yourScore = [];
	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;

	// function that generates a random number each time the page loads (set min and max)

	var targetScore = Math.floor(Math.random()*(100-20+1) + 20);

	// append random number to "#random-number"

	$("#random-number").text(targetScore);

	// function crystalScore that assigned a score to each crystal 

	function crystalScore() {

		for (var i = 0; i < scoreOptions.length; i++) {
			yourScore[i] = scoreOptions[Math.floor(Math.random() * scoreOptions.length)];
			console.log(yourScore[i]);
		}

		// attributing above generated random score to each crystal id and then assigning it to its variable
		$("#crystal1").attr("value", yourScore[0]);
		crystal1 = $("#crystal1").attr("value");
		// convert string to integer 
		crystal1 = parseInt(crystal1);
		console.log(crystal1);

		$("#crystal2").attr("value", yourScore[1]);
		crystal2 = $("#crystal2").attr("value");
		crystal2 = parseInt(crystal2);
		console.log(crystal2);

		$("#crystal3").attr("value", yourScore[2]);
		crystal3 = $("#crystal3").attr("value");
		crystal3 = parseInt(crystal3);
		console.log(crystal3);	
		
		$("#crystal4").attr("value", yourScore[3]);
		crystal4 = $("#crystal4").attr("value");
		crystal4 = parseInt(crystal4);
		console.log(crystal4);	

	}

	crystalScore();


	// add on-click listener to each element with class ".crystal"
	$("#crystal1").on("click", function() {
	// counter to increase by the value of yourScore assigned to the clicked crystal
		counter += crystal1;
	// append counter to "#your-score" div
		$("#your-score").text(counter);

		if (counter === targetScore) {
			wins ++
			$("#wins").text("Wins: " + wins);
		}

		else if (counter >= targetScore) {
			losses++
			$("#losses").text("Losses: " + losses);
		}

	});

	$("#crystal2").on("click", function() {
		counter += crystal2;
		$("#your-score").text(counter);

		if (counter === targetScore) {
			wins ++
			$("#wins").text("Wins: " + wins);
		}

		else if (counter >= targetScore) {
			losses++
			$("#losses").text("Losses: " + losses);
		}

	});

	$("#crystal3").on("click", function() {
		counter += crystal3;
		$("#your-score").text(counter);

		if (counter === targetScore) {
			wins ++
			$("#wins").text("Wins: " + wins);
		}

		else if (counter >= targetScore) {
			losses++
			$("#losses").text("Losses: " + losses);
		}

	});

	$("#crystal4").on("click", function() {
		counter += crystal4;
		$("#your-score").text(counter);

		if (counter === targetScore) {
			wins ++
			$("#wins").text("Wins: " + wins);
		}

		else if (counter >= targetScore) {
			losses++
			$("#losses").text("Losses: " + losses);
		}

	});


});
