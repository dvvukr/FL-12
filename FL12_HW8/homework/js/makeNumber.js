function makeNumber(string){
	var number = '';
	for (var i = 0; i <= string.length; i++) {
        if (Number.isInteger(parseInt(string[i]))) {
            number = number + string[i];
        }
    }
	return number;
}
makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''
