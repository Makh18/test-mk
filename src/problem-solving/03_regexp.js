/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */
 export default function containsNumber(input){
    let sh = String(input);
    for( let i = 0; i < sh.length; i++){
        if(!isNaN(sh.charAt(i)) && !(sh.charAt(i) === " ") ){
          return true;
        }
    }
    return false;
  }

  export default function containsRepeatingLetter(str){

        for (var i=0; i<str.length; i++) {
          if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
            return false; // repeats
          }
        }
      return true;
    }

  

export default function endsWithVowel(str){
    const vowels = ['u', 'e', 'o', 'a', 'i'];

      const lastChar = str.charAt(str.length - 1);
      return vowels.includes(lastChar);
    }
  
  
export default function matchesPattern(str){
    if (str.match(/^([a-z0-9]{3,}+(\-)+[a-z0-9]{3,}+(\-)+[a-z0-9]{4,})$/)) {
        return("match!");
  }
}
