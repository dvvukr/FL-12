function makeNumber (string) {
        var number = '';
        for (var i = 0; i <= string.length; i++) {
            if (Number.isInteger(parseInt(string[i]))) {
                number = number + string[i];
            }
        }
        return number;
    }
function countNumbers (string) {
        var numbers = makeNumber(string);
        var count = {};
        for (var i = 0; i < numbers.length; i++) {
            if (!count[numbers[i]]) {
                count[numbers[i]] = 1;
            } else {
                count[numbers[i]] = count[numbers[i]] + 1;
            }
        }
        return count;
    }

countNumbers('erer384jj4444666888jfd123');
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
countNumbers('jdjjka000466588kkkfs662555');
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
countNumbers(''); // => {}
