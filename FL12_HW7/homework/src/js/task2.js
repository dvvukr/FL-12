var startGame = confirm('Do you want to play a game?', '');

if ( startGame ) {
	var attempt = 0;
	var userInput = parseInt(prompt('Choose an integer number in range 0 to 8:', ''));
	if (userInput){
		attempt = attempt + 1;
		// var mathRandom = Math.random(1, 8);
		var mathRandom = Math.floor(Math.random() * 8);
		console.log(mathRandom);
		if ( userInput === mathRandom ){
			if ( attempt === 1){
				alert('Congratulation, you won! Your prize is: 100$');
			} else if ( attempt === 2 ) {
				alert('Congratulation, you won! Your prize is: 50$');
			} else if ( attempt === 3 ) {
				alert('Congratulation, you won! Your prize is: 25$');
			} else {
				alert('Thank you for your participation. Your prize is: … $');
			}
		} 

	}
} else{
	alert('You did not become a billionaire, but can.');
}