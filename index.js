// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function change_para() {
  var b = 10;
  appDiv.innerHTML = 'para changed and the value of b is ' + b;
}
change_para();
var a = 13;
let q = a / 2;
let r = a % 2;
console.log(
  'value of a is ',
  a,
  'and the value of quotient is ',
  q,
  'and the value of remainder is ',
  r
);
var cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[1], ', type of cars is ', typeof cars);
function mul(a, b) {
  return a * b;
}
console.log('product is ', mul(2, 3));
const car = { type: 'Fiat', model: '500', color: 'white' };
console.log('color of this car is ', car.color);
console.log('today"s complete date : ', Date());

var name = window.prompt('Enter your name: ');
alert('Your name is ' + name);
