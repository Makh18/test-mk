/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */
 export default function sum(myarray){
 var total = 0;
 for(var i = 0; i < myarray.length; i++){
     total += myarray[i];
 }
 return total;
}

export default function concat(array1,array2){
 const array3 = array1.concat(array2);
 return array3;
 }
 
 export default function count (arr, val) {
     return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
 }

 export default function duplicates(arry){
     return arry.filter((item, index) => arr.indexOf(item) !== index)
 }

 export default function square(a){
    let result = a.map(x => x*x);
    return result;
 }
 