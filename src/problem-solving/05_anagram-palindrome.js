/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */
 let NO_OF_CHARS = 256;
  
 /* function to check whether
 characters of a string can form
 a palindrome */
 export default function isPalindromePossible(str)
 {
       
     // Create a count array and
     // initialize all values as 0
     let count = new Array(NO_OF_CHARS);
     count.fill(0);

     // For each character in input
     // strings, increment count in
     // the corresponding count array
     for (let i = 0; i < str.length; i++)
         count[str[i].charCodeAt()]++;

     // Count odd occurring characters
     let odd = 0;
     for (let i = 0; i < NO_OF_CHARS; i++) {
         if ((count[i] & 1) != 0)
             odd++;

         if (odd > 1)
             return false;
     }

     // Return true if odd count
     // is 0 or 1,
     return true;
 }
                             

