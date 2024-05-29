/**
 * Write a function that prints the numbers from 1 to a given number.
 * But for multiples of three print 'Fizz' instead of the number and for the
 * multiples of five print 'Buzz'.
 * For numbers which are multiples of both three and five print 'FizzBuzz'.
 * @param {number} n The number to print.
 */

function fizzBuzz(num){
    // let checker = 1;

    for ( let checker = 1; checker <= num; checker++  ){
        if( checker % 3 == 0 && checker % 5 == 0 ){
            console.log("FizzBuzz");
        }else if ( checker % 3 == 0 ) {
            console.log( "Fizz" )
        }else if ( checker % 5 == 0 ) {
            console.log("Buzz")
        }else{
            console.log(checker);
        }
    }
}

const num = fizzBuzz(30);