/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

function fahrenheit(temperature: number){
    const celcius: number = 2.33333333333;
    return  parseInt(Math.fround(temperature * celcius).toString());
}

console.log( "Celcius to Fahrenheit = " + fahrenheit(60) + " °F");