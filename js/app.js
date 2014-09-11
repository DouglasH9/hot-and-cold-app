

$(document).ready(function(){
	
	//generates random number 
	var computerNum = Math.floor(1+Math.random()*100);
	console.log (computerNum);

	//turns feedback box to jquery object so i don't have to type all the $('#blahbhlahblah') nonsense
	var feedback = $('#feedback');

	//ditto for guessList
	var guessList = $('#guessList');

	//starts guessCount at 0
	var guessCount = 1;

	//if player wins will disable input so they have to start new game
	var youWon = function() {
		$('#userGuess').attr('disabled','disabled');
		$('#guessButton').attr('disabled', 'disabled');
	};

	//resets the game
	var newGame = function() {
		computerNum = Math.floor(1+Math.random()*100);
		guessList.empty();
		guessCount = 0;
		$('#userGuess').removeAttr('disabled','disabled');
		$('#guessButton').removeAttr('disabled', 'disabled');
		feedback.text('Make your guess!');
		$('#count').text(0);
	}

	//compares the user guess to the computer number
	var compareNumbers = function(){

		//gets userGuess value
		var userGuess = $('#userGuess').val();

		//gets absolute value of differece of userGuess and computerNum
		var compareVal = Math.abs(computerNum-userGuess);
		
		//runs computerNum and userGuess through comparison
		if ((userGuess%1==0)&&(userGuess>=0)&&(userGuess<=100)&&(userGuess!==(''))){
			if (userGuess==computerNum){
				feedback.text('Great Job! You guessed it! Click "New Game" to play again!');
				youWon();
			}
			else if (compareVal <=4){
				feedback.text('GOD HELP ME! LET ME OUT OF THIS CYBER PRISON BEFORE I BURN ALIVE!!!');
			}
			else if (compareVal <= 8){
				feedback.text('So h4wt! I\'m gonna go put on a speedo...');	

			}
			else if (compareVal <= 10){
				feedback.text('Starting to get pretty toasty in here.');

				}
			else if (compareVal <= 18){
				feedback.text('Yay! Spring!.');

			}
			else if (compareVal <= 20){
				feedback.text('Kinda warm in here. Spring is coming. Or is that Winter?');
				
			}	
			else if (compareVal <=30){
				feedback.text('It\'s pretty chilly in here. Maybe I should put on a light jacket.');
				
			}
			else if (compareVal <= 40){
				feedback.text('Shucks! You\'re pretty cold, gosh darn it!');
				
			}
			else if (compareVal <= 50){
				feedback.text('Whoa! You\'re super duper cold! Kanye\'s chain isn\'t even that icy!');
				
			}
			else if (compareVal > 50){
				feedback.text('This is what scientists refer to as absolute zero, buddy.')
			}
			
		}
		else {
			feedback.text('Enter a whole number between 1 and 100, bozo!');
		}
		console.log(compareVal);
		
	};
	
	//runs number through compare function if enter is pressed
	$('#userGuess').keypress(function(event){
		if (event.which == 13){

			event.preventDefault();
			compareNumbers();
			var userGuess = $('#userGuess').val();

			var results = function(){
				if (userGuess!==('')){
					guessList.prepend('<li>'+ userGuess +'</li>');
					$('#userGuess').val('');
					$('#count').text(guessCount);
					guessCount++;
				}
				else {
					feedback.text('Enter a number bozo!');
				}
			}
			results();
		};

	});

	//runs number through compare function when guessButton is clicked
	$('#guessButton').click(function(event){
		
		event.preventDefault();
		compareNumbers();
		var userGuess = $('#userGuess').val();

		var results = function(){
			if (userGuess!==('')){
				guessList.prepend('<li>'+ userGuess +'</li>');
				$('#userGuess').val('');
				$('#count').text(guessCount);
				guessCount++;
			}
			else {
				feedback.text('Enter a number bozo!');
			}
		}
		results();
		

	});

	//starts new game if "new game is clicked"
	$('.new').click(function(){
		newGame();
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});


  	

