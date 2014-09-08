
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//gets number guessed by user
  	var numEnter = $('input[name = userGuess]').val();

  	//prepends userGuess to 
  	$('#userGuess').keypress(function(event){

  		if(event.which ==13) {

  		console.log("enter was pressed")
  		}
  	})
});


