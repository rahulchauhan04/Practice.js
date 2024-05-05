
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
 
 
 
 // Exercise 1: Count Vowels in a String
 
 function countVowels(string){
     let array = ['a','e','i','o','u'];
     let counter  = 0;

     for(let i = 0; i < string.length; i++){
          if(array.includes(string[i])){
               counter ++;
          }
     }
     return counter;
 }

 console.log(countVowels("Hello, World!"));



// Exercise 2: Find the Sum of All Elements in an Array

function sumArray(array){
     let sum = 0;
     for(let i = 0; i < array.length; i++){
          sum += array[i];
     }
     return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));



// Exercise 3: Find the Smallest Number in an Array

function findMin(array){
     let min  = array[0];

     for (let i = 0; i < array.length; i++){
          if(array[i] < min)
               min = array[i];
     }
     return min;
}

console.log(findMin([8, 2, 3, 5, 1, 9],));



// Exercise 4: Check if a String is a Palindrome

function isPalindrome(string){
let cleanedString  = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
 let reversedString =  cleanedString.split('').reverse().join('')

 return cleanedString === reversedString; 
}

console.log(isPalindrome("Racecar"));



// Exercise 5: Find the Maximum Value in a Nested Array

function findMaxInNestedArray(nestedArray){
     let max = 0;
     for (let i = 0; i < nestedArray.length; i++){
          for (let j = 0; j < nestedArray[i].length; j++){
               if (nestedArray[i][j] > max) {
                    max = nestedArray[i][j]
               }
          }
     }
     return max;
}

console.log(findMaxInNestedArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));



// Exercise 6: Find the Sum of Digits in a Number

function sumDigits(number){
     let numberString = number.toString();
     let sum = 0;

     for (let i = 0; i < numberString.length; i++){
          let digit = parseInt(numberString[i]);
          sum += digit;
     }
     return sum;
}

console.log(sumDigits(123456))



// Exercise 7: Count the Occurrences of Each Character in a String

function countCharacters(string){
     let charcCount = {};

     for (let i=0; i <=string.length-1; i++) {
          if (string[i] === ' ') {
               continue;
          }
          if (string[i] in charcCount ) {
               charcCount[string[i]]++
          } else {
               charcCount[string[i]] = 1
          }
     }
     return charcCount;
}

console.log(countCharacters("hello world"));



// Exercise 8: Check if an Array is Sorted in Ascending Order

function isSortedAscending(array){

     for (let i = 0; i < array.length-1; i++){
          if (array[i] > array[i+1]){
               return false 
          } 
     }
     return true;
}

console.log(isSortedAscending([1, 2, 3, 4, 5]));
console.log(isSortedAscending([3, 1, 4, 2, 5]));



// Exercise 9: Find the Index of the First Occurrence of a Substring

function findSubstring(mainString,subString){
     for(let i = 0; i <= mainString.length-subString.length; i++){
          if (mainString.substr(i,subString.length) === subString){
               return i;
          }
     }
     return -1;
}

console.log(findSubstring("hello world", "world"));
console.log(findSubstring("hello world", "earth"));



// Exercise 10: Count the Occurrences of Each Word in a String

function countWords(string){
     let wordArray = string.split(' ');
     let wordCount = { };

     for (let i = 0; i < wordArray.length; i++){
          let currentword = wordArray[i]
          if (currentword in wordCount){
               wordCount[currentword]++
          } else {
               wordCount[currentword] = 1;
          }
     }
     return wordCount;
}

console.log(countWords("hello world hello hello rahul why obsessed continue with vision with with"));
