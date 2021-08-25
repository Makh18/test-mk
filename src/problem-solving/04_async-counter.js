/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
 */
 export default function count(start, end,callback){   

    var counter=setInterval(timer, callback); //Called after each 100ms with an increment
    
    function timer()
    {
      start=start+1;
      if (start <= end)
      {
         clearInterval(counter);
         //counter ended, do something here
         return;
      }
    
    }
}
