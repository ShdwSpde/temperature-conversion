// start with temp in 
let Kelvin = x;

// convert to Celsius
const Celsius = Kelvin - 273;

// define fahrenheit
let fahrenheit = Celsius * (9/5) + 32;

// reassign to rounded down value
fahrenheit = Math.floor(fahrenheit)

// return string of temperature in degrees fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = Celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
