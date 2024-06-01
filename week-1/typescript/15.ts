/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

function oddEven(n: number):void{
    for (let num:number = 1; num <= n; num++){
        if(num%2!=0){
            console.log(`${num} is odd`);
        } else {
            console.log(`${num} is even`);
        }
    }
}

oddEven(10);