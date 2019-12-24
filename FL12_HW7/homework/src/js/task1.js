var userEmail = prompt('Enter your email:', '');

if ( userEmail == '' || userEmail == null ) {
	alert('Canceled');	
} else if ( userEmail.length < 5 ) {
	alert('I don\'t know any emails having name length less than 5 symbols');
} else if (  userEmail == 'user@gmail.com' || userEmail == 'admin@gmail.com' ) {
	var userPassword = prompt('Enter your password:', '');
} else {
	alert('I don\’t know you');
}