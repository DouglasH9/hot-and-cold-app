

$(document).ready(function(){
	
	//generates random number 
	var computerNum = Math.floor(1+Math.random()*100);
	console.log (computerNum);

	//turns feedback box to jquery object so i don't have to type all the $('#blahbhlahblah') nonsense
	var feedback = $('#feedback');

	//ditto for guessList
	var guessList = $('#guessList');

	//if player wins will disable input so they have to start new game
	var youWon = function() {
		$('#userGuess').attr('disabled','disabled');
	};

	var newGame = function() {
		computerNum = Math.floor(1+Math.random()*100);

	}

	var compareNumbers = function(){

		//gets userGuess value
		var userGuess = $('#userGuess').val();

		//gets absolute value of userGuess and computerNum
		var compareVal = Math.abs(computerNum-userGuess);
		
		//runs computerNum and userGuess through comparison
		if ((userGuess%1==0)&&(userGuess>=0)&&(userGuess<=100)){
			if (userGuess==computerNum){
				feedback.text('Great Job! You guessed it! Click "New Game" to play again!');
				youWon();
			}
			else if (compareVal >50){
				feedback.text('Whoa! You\'re super duper cold! Kanye\'s chain isn\'t even that icy!');
				
			}
			else if ((compareVal <= 50)&&(compareVal>40)){
				feedback.text('Shucks! You\'re pretty cold, gosh darn it!');
				
			}
			else if ((compareVal <=40)&&(compareVal>30)){
				feedback.text('It\'s pretty chilly in here. Maybe you should wear a light jacket.');
				
			}
			else if ((compareVal <= 30)&&(compareVal > 20)){
				feedback.text('Kinda warm in here. Spring is coming.');
				
			}
			else if ((compareVal <= 25)&&(compareVal > 15)){
				feedback.text('Yay! Spring!.');

			}
			else if ((compareVal <= 15)&&(compareVal > 8)){
				feedback.text('Starting to get pretty hot in here');

				}			
			else if ((compareVal <= 5)&&(compareVal > 3)){
				feedback.text('So hot!!!');	

			}
			else if (compareVal <= 3){
				feedback.text('GOD HELP ME! LET ME OUT OF THIS CYBER PRISON BEFORE I BURN ALIVE!');
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
			guessList.prepend('<li>'+ userGuess +'</li>');
			$('#userGuess').val('');

		};

	});

	//runs number through compare function when guessButton is clicked
	$('#guessButton').click(function(event){
		
		event.preventDefault();
		compareNumbers();
		var userGuess = $('#userGuess').val();
		guessList.prepend('<li>' + userGuess + '</li>');
		$('#userGuess').val('');
		

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


  	

