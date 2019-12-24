let a = parseInt(prompt('Enter value A:', 1));
console.log('Value A:' + a);

let b = parseInt(prompt('Enter value B:', 1));
console.log('Value B:' + b);

let c = parseInt(prompt('Enter value C:', 1));
console.log('Value C:' + c);

if (!a || a === 0 || isNaN(a)) {
	alert('Invalid input data (a)');
} else if (!b || b === 0 || isNaN(b)){
	alert('Invalid input data (b)');
} else if (!c || c === 0 || isNaN(c)){
	alert('Invalid input data (c)');
} else {
	let Descriminant = b * b - 4 * a * c;
	if (Descriminant < 0) {
		console.log('no solution');
	} else if (Descriminant === 0) {
		console.log('x = 0');
	} else {
		let x1 =(-b - Math.sqrt(Descriminant)) / (2 * a);
		let x2 =(-b + Math.sqrt(Descriminant)) / (2 * a);
		console.log('x1 = ' + x1);
		console.log('x2 = ' + x2);
	}
}