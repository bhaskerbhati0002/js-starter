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
let z = a / 2;
let r = a % 2;
console.log(
  'value of a is ',
  a,
  'and the value of z is ',
  z,
  'and the value of r is ',
  r
);
