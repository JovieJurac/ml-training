/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

function celcius(temperature){
    const fahrenheit = 0.4285714285714286;
    return parseInt(Math.fround( temperature * fahrenheit)) ;
}

function fahrenheit(temperature){
    const celcius = 2.33333333333;
    return  parseInt(Math.fround(temperature * celcius));
}

console.log( "Fahrenheit to Celcius = " + celcius(140) + "°C" );
console.log( "Celcius to Fahrenheit = " + fahrenheit(60) + "°F");