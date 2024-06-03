/**
 * Write a function that takes a password input and validates it based on the following rules:
 * - The password must be at least 8 characters long.
 * - The password must contain at least one uppercase letter.
 * - The password must contain at least one lowercase letter.
 * - The password must contain at least one number.
 * - The password must contain at least one special character.
 *
 * It must return a message whether the password is valid or not.
 *
 * Example:
 * - if less than 8 characters, return "Password must be at least 8 characters long"
 * - if no uppercase letter, return "Password must contain at least one uppercase letter"
 * - if no lowercase letter, return "Password must contain at least one lowercase letter"
 * - if no number, return "Password must contain at least one number"
 * - if no special character, return "Password must contain at least one special character"
 * - if all rules are met, return "Password is valid"
 *
 * @param {string} password
 * @returns {string}
 */


function passwordCheck(password: string){
    try{
        switch(true){
            case password.length < 8:{
                throw ("Password must be at least 8 characters long.");
            }
            case !/[a-z]/.test(password) : {
                throw ("Password must contain at least one lowercase letter.")
            }
            case !/[A-Z]/.test(password) : {
                throw ("Password must contain at least one uppercase letter")
            }
            case !/[\d]/.test(password) : {
                throw ("Password must contain at least one number");
            }
            case !/[^a-zA-Z0-9]/.test(password) : {
                throw ("Password must contain at least one special character");
            }
            default : {
                throw ("Password is valid");
            }
        }} catch (error){
            return console.log(error);
        }
    }
    
    passwordCheck("AFD@FEFasEF5");