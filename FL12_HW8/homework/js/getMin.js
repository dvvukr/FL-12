function getMin(a, b, c){
	var array = [];
	var min = null;
	array.push(a, b, c);
	for (var i = 0; i <= array.length; i++) {
		if (min === null || array[i] < min) {
			min = array[i];
		} 
	}
	return min;
}

getMin(3, 0, -3); //=> -3