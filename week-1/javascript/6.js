/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function celcius(temperature){
    const fahrenheit = 0.4285714285714286;
    return console.log( "Fahrenheit to Celcius = " + parseInt(Math.fround( temperature * fahrenheit))+ "°C" );
}
celcius(140);