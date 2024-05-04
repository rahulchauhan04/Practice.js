
// for loop

for (let i = 1; i<= 10; i++){
     console.log(i);
 }
 
 
 
 // while loop 
 
 let i = 1;
 
 while(i <= 10){
      console.log(i);
      i++
 }
 
 
 
 //do while loop
 
 let i = 1;
 
 do {
      console.log(i);
      i++;
 } while (i <= 10);
 
 
 
 // for in 
 
 let property = {
      "name": 'harkirat' ,
      "age":  32,
      "city": 'mehsana', 
 }
 
 for (const key in property) {
      if (property.hasOwnProperty(key)) {
           console.log(key + ': ' + property[key]);
      }
 }
 
 
 
 // for of
 
 let array = [1,2,3,4,5,6,7,8,9,10];
 
 for (const t of array) {
      console.log(t);
 }
 
 
 
 // Exercise: Sum of Array Elements
 
 function sumArray(numbers){
      let sum = 0;
      for (const t of numbers){
           sum  = sum + t;
      }
      return sum;
 }
 
 let numbers = [10, 20, 30, 40, 50];
 
 console.log(sumArray(numbers));
 
 
 
 // Exercise: Multiplication Table
 
 function multiplicationTable(n) {
      let result = '';
 
      for (let i = 1; i <= n; i++) {
           let currentRow = '';
           for (let j = 1; j <= n; j++) {       
                currentRow += i*j ;
           }
           result += currentRow + '\n';
      }
      return result;
 }
 
 console.log(multiplicationTable(5));
 
 
 
 // Exercise: Reverse an Array
 
 function reverseArray(array){
      let newArray = [];
 
      for(let i = array.length-1; i >= 0; i--){
           newArray.push(array[i]);
      }
      return newArray;
 }
 
 console.log(reverseArray([1, 2, 3, 4, 5]))
 
 
 
 // Exercise: Find the Maximum Value in an Array
 
 function findMax(numbers){
      let max = 0;
 
      for(let i = 0; i < numbers.length; i++){
           if (numbers[i] > max){
                max = numbers[i];
           }
      }
      return max;
 }
 
 console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6, 5]));
 
 
 
 // Exercise: Remove Duplicates from an Array
 
 function removeDuplicate(numbers){
      let uniqueElements = new Set ()
 
      for (let i = 0; i < numbers.length; i++){
           uniqueElements.add(numbers[i]);
      }
      return [...uniqueElements];
 }
 
 console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))
 
 
 
 // Exercise: Count Vowels in a String
 
 function countVowels(){
 
 }