/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function fahrenheit(temperature){
    const celcius = 2.33333333333;
    return  parseInt(Math.fround(temperature * celcius));
}

console.log( "Celcius to Fahrenheit = " + fahrenheit(60) + "°F");