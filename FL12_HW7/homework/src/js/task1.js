let userEmail = prompt('Enter your email:', '');

if ( userEmail === '' || userEmail === null ) {
	alert('Canceled.');	
} else if ( userEmail.length < 5 ) {
	alert('I don\'t know any emails having name length less than 5 symbols');
} else if ( userEmail === 'user@gmail.com' ) {
	let password = 'UserPass';
	let userPassword = prompt('Enter your password:', '');
	if ( userPassword === '' || userPassword === null ) {
		alert('Canceled.');	
	} else if (userPassword === password) {
		let needToChange = confirm('Do you want to change your password?');
		if (needToChange) {
			let oldPassword = prompt('Enter your old password:', '');
			if (oldPassword === password) {
				let newPassword = prompt('Enter new password.', '');
				if ( newPassword === '' || newPassword === null ) {
					alert('Canceled.');
				} else if ( newPassword.length < 6 ) {
					alert('It’s too short password. Sorry.');
				} else {
					let newPassword2 = prompt('Repeat your new password.', '');
					if (newPassword2 === newPassword) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			} else {
				alert('Wrong password.');
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password.');	
	}
} else if ( userEmail === 'admin@gmail.com' ) {
	let password = 'AdminPass';
	let adminPassword = prompt('Enter your password:', '');
	if ( adminPassword === '' || adminPassword === null ) {
		alert('Canceled.');	
	} else if (adminPassword === password) {
		let needToChange = confirm('Do you want to change your password?');
		if (needToChange) {
			let oldPassword = prompt('Enter your old password:', '');
			if (oldPassword === password) {
				let newPassword = prompt('Enter new password.', '');
				if ( newPassword === '' || newPassword === null ) {
					alert('Canceled.');
				} else if ( newPassword.length < 6 ) {
					alert('It’s too short password. Sorry.');
				} else {
					let newPassword2 = prompt('Repeat your new password.', '');
					if (newPassword2 === newPassword) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			} else {
				alert('Wrong password.');
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password.');	
	}
} else {
	alert('I don’t know you');
}