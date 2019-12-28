function isLeapYear(dateString){
	// var isLeap = false;
    var inputDate = new Date(dateString);
    if (!inputDate) {
        return inputDate;
    }
    var inputYear = inputDate.getFullYear();
    var march = new Date(inputYear, '02', '01');
    var current = new Date(inputYear, '01', '29');
    if (current.getMonth() === march.getMonth()) {
        return inputYear + ' is not a leap year.';
    }
	return inputYear + ' is leap year';
}

isLeapYear('2020-01-01 00:00:00'); // =>  ‘2020 is a leap year’
isLeapYear('2020-01-01 00:00:00777'); // =>  ‘Invalid Date’
isLeapYear('2021-01-15 13:00:00'); // =>  ‘2021 is not a leap year’
isLeapYear('2200-01-15 13:00:00'); // =>  ‘2200 is not a leap year’
isLeapYear(1213131313135465656654564646542132132131); // =>  ‘Invalid Date’
isLeapYear(1213131313); // => ‘1970 is not a leap year’  
