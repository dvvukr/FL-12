let a = prompt('Enter the side of triangle A:');
console.log('Side A:', a);

let b = prompt('Enter the side of triangle B:');
console.log('Side B:', b);

let c = prompt('Enter the side of triangle C:');
console.log('Side C:', c);

if (a === '' || a === undefined || (b === '' || b === undefined) || (c === '' || c === undefined)) {
	alert('Input values should be ONLY numbers');
	console.log('Input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
	alert('Triangle must have 3 sides with a positive definite length');
	console.log('Triangle must have 3 sides with a positive definite length');
} else {
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	c = parseInt(c, 10);
	if (isNaN(a) && !(a + b > c) || isNaN(b) && !(a + c > b) || isNaN(c) && !(b + c > a)) {
		alert('Triangle doesn’t exist');
		console.log('Triangle doesn’t exist');
	} else {
		if (a === b && a === c) {
			alert('Equilateral triangle');
			console.log('Equilateral triangle');
		} else if (a === b && a !==c || a === c && a !==b || b === c && b !==a) {
			alert('Isosceles triangle');
			console.log('Isosceles triangle');
		} else {
			alert('Scalene triangle');
			console.log('Scalene triangle');
		}
	}
}
