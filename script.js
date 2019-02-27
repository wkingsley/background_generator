
var _ = require('lodash');

var array = [1,2,3,4,5];

console.log('answer', _.without(array, 2));

var body = document.getElementById('gradient');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

var css = document.querySelector('h3');

// console.log(color1);
// console.log(color2);
// console.log(body);
// console.log(css);

// color1.addEventListener('input', function(){
// 	body.style.background = 
// 	'linear-gradient(to right, '
// 	+ color1.value + ',' 
// 	+ color2.value 
// 	+ ')';
// })

// color2.addEventListener('input', function(){
// 	body.style.background = 
// 	'linear-gradient(to right, '
// 	+ color1.value + ',' 
// 	+ color2.value + ')';
// })

color1.addEventListener('input', selectColor);
color2.addEventListener('input', selectColor);

function selectColor(){
	body.style.background = 
	'linear-gradient(to right, ' + 
	color1.value + ',' + 
	color2.value + ')';

	css.textContent = body.style.background + ';';
	// css.appendChild(document.createTextNode(body.style.background + ';'));
}
