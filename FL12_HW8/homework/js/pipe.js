function addOne(x) {
  return x + 1;
}
function pipe(num){
	for (var i = 1; i < arguments.length; i++) {
		num = arguments[i](num);
	}
	return num;
}
pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3
