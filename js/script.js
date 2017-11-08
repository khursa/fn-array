;(function() {

1
var inputNumber = prompt(
	"Please input your number, less than 1 and greater than 10 ", 1);

var array = [1, 2, 3, 4, 5];

function fn(array) {

  var area = [];

    for (var key in array) {

    area.push(Math.pow(array[key], inputNumber));

    }

  return area;

}

function map(fn, array) {

  return fn(array);

}

document.write(map(fn, array));

})(); 
