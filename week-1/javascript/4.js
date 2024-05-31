/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */



function formatDate(date){
    const format = (num) => num.toString().padStart(2,0);

    const month = format(date.getMonth()+1);
    const day = format(date.getDate());
    const year = date.getFullYear();
    const hour = format(date.getHours());
    const min = format(date.getMinutes());
    const sec = format(date.getSeconds());
    
    return console.log(`${month}-${day}-${year} ${hour}:${min}:${sec}`);
}

formatDate(new Date);