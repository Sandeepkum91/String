// // let str="this is Sandeep";
// // console.log(str.length);

// //Q2
// // let str1="the";
// // let str2=str1;
// // console.log(str2);


// //Q3
// // let string1="this sham";
// // let string2=" is sham";
// // console.log(string1.concat(string2));

// //Q4
// // let string1="this ram";
// // let string2=" is ram";
// // if(string1==string2){
// //     console.log("both strings are equal");
// // }
// // else{
// //     console.log("both strings are not equal");
// // }

// //Q6
// // let str1="this is Sandeep";
// // console.log(str1.toUpperCase());

// // let str2="SHAM IS GOOD BOY";
// // console.log(str2.toLowerCase());

// // Q8
// // function toggle(str) {
// //     return str.split('').map(char => {
// //         return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
// //     }).join('');
// // }


// // let myString = "This Is Sandeep";
// // let stringis = toggle(myString);
// // console.log(stringis); 

// Q10
// let string1="hello world 2024";
// let charcount=0;
// let numcount=0;
// for (const i of string1) {
// let charA=i.charCodeAt(0);
// if(charA>=65 && charA<=90 || charA>=97 && charA<=122){
//     charcount++;
    
// }
// else if(charA>=48 && charA<=57){
//     numcount++;
// }
// }
// console.log("Character count: "+charcount);
// console.log("Number count: "+numcount);


// Q11
// const countVowelsAndConsonants = (str) => {
//     const vowels = 'aeiouAEIOU';
//     let vowelsCount = 0;
//     let consonantsCount = 0;
  
//     for (const char of str) {
//       if (vowels.includes(char)) {
//         vowelsCount++;
//       } else if (char.toLowerCase() !== char.toUpperCase()) {
//         consonantsCount++;
//       }
//     }
//     console.log("vowelCount: "+vowelsCount);
//     console.log("consonantsCount: "+consonantsCount);
//   };
  
//   countVowelsAndConsonants('Hello sandeep');
  

// Q12
// function countWords(str) {
//     var words = str.split(' ');
//     return words.length;
//   } 
//   var myString = "This is the string.";
//   console.log(countWords(myString));

// Q13
// function reverseString(str) {
//     return str.split("").reverse().join("");
//   }
  
//   let input = "Sandeep";
//   let reversed = reverseString(input);
  
//  console.log("input string: "+input);
//   console.log("Reversed string: "+reversed);


// Q14
// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
//   }
  
//   let input = "muninum";
//   let result = isPalindrome(input);
//   if (result) {
//     console.log(" is Palindrome")
//   } else {
//     console.log("is not Palindrome");
//   }
  
// Q15
// // function reverseWords(str) {
// //     return str.split(' ').reverse().join(' ');
// //   }
  
// //   let input = "Today is Monday";
// //   let result = reverseWords(input);
// //   console.log("input string: "+input);
// //   console.log("result: "+result); 
 

// Q16
// function findFirstOccurrence(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1; 
//   }
  
//   let inputStr = "This is Sandeep";
//   let inputChar = "z"
  
//   let result = findFirstOccurrence(inputStr, inputChar);
  
//   if (result !== -1) {
//     console.log("First occurrence of "+inputChar+" is at index: "+result);
//   } else {
//     console.log("Character "+inputChar+ " not found in the string");
//   }

//   Q17
// function findLastOccurrence(str, char) {
//     for (let i = str.length - 1; i >= 0; i--) {
//       if (str[i] == char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   let inputStr = "thsisham"
//   let inputChar = 'm'
  
//   let lastIndex = findLastOccurrence(inputStr, inputChar);
  
//   if (lastIndex !== -1) {
//     console.log(`Last occurrence of '${inputChar}' is at index ${lastIndex}`);
//   } else {
//     console.log(`Character '${inputChar}' not found in the string`);
//   }


// Q18
// function searchAllOccurrences(str, char) {
//     let inNew = [];
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] == char) {
//         inNew.push(i);
//       }
//     }
//     return inNew;
//   }
  
//   let inputStr = "this is san"
//   let inputChar = 'i'
  
//   let result = searchAllOccurrences(inputStr, inputChar);
  
//   if (result.length > 0) {
//     console.log(`All occurrences of '${inputChar}' are at inNew: ${result.join(', ')}`);
//   } else {
//     console.log(`Character '${inputChar}' not found in the string`);
//   }
  


// Q23
// function removeLastOccurrence(str, char) {
//     let lastIndex = str.lastIndexOf(char);
    


//     if (lastIndex !== -1) {
//       str = str.substring(0, lastIndex) + str.substring(lastIndex + 1);
//     }
//     return str;
//   }
  
//   let inputStr = "this is Sandep";
//   let inputChar = 'e';
  
//   let result = removeLastOccurrence(inputStr, inputChar);
  
//   console.log("String after removing last occurrence of " +inputChar+ ":"+result);

// Q24
// function replaceFirstOccurrence(str, oldChar)
// {
//     let index=0;
//     for (const i of str) {
//        if (i == oldChar) {
//         str=str.substring(0,index)+str.substring(index+1);
//        }
//     index++;
//  }
//  return str;
// }
// let inputStr = "this is";
// let inputChar = 's';
// let result = replaceFirstOccurrence(inputStr, inputChar);
// console.log("String after removing frist occurrence of " + inputChar + " : "+result);

// Q25
// function allOccurrence(str, Char)
// {
//     let index=0;
//     let str1=str;
//     for (const i of str) {
//        if (i == Char) {
//         str1=str1.substring(0,index)+str1.substring(index+1);
//        }
//        else{
//        index++;
//        }
    
//  }
//  return str1;
// }
// let inputStr = "this is";
// let inputChar = 's';
// let result = allOccurrence(inputStr, inputChar);
// console.log("String after all  occurrence remove " + inputChar + " : "+result);

// //Q27

// function replaceFirstOccurrence(str, oldChar,newChar)
// {
//     let index=0;
//     for (const i of str) {
//        if (i == oldChar) {
//         str=str.substring(0,index)+newChar+str.substring(index+1);
//         break;
//        }
//     index++;
//  }
//  return str;
// }
// let inputStr = "this is";
// let oldChar = 's';
// let newChar='w'
// let result = replaceFirstOccurrence(inputStr, oldChar,newChar);
// console.log("String after removing frist occurrence of " + oldChar+ " : "+result);



// //Q28

// function replaceLastOccurrence(str, oldChar,newChar)
// {
//     for (let i = str.length - 1; i >= 0; i--) {
//        if (str[i] == oldChar) {
//         str=str.substring(0,i)+newChar+str.substring(i+1);
//         break;
//        }
    
//  }
//  return str;
// }
// let inputStr = "this is";
// let oldChar = 's';
// let newChar='w'
// let result = replaceLastOccurrence(inputStr, oldChar,newChar);
// console.log("String after removing frist occurrence of " + oldChar+ " : "+result);

// // //29
// // function replaceAllOccurrence(str, oldChar,newChar)
// // {
// //     let index=0;

// //     for (const i of str) {
// //        if (i == oldChar) {
// //         str=str.substring(0,index)+ newChar +str.substring(index+1);
// //        }
// //     index++;
// //  }
// //  return str;
// // }
// // let inputStr = "this is";
// // let oldChar = 's';
// // let newChar = 'p';
// // let result = replaceAllOccurrence(inputStr, oldChar,newChar);
// // console.log("String after removing all occurrence of " + oldChar + " : "+result);


// // let str = "This is a string that is to check, if 'is' removed";
// // let word = "is";

// // for (let i = 0; i < str.length; i++) {
// //     if (word[0] == str[i]) {
// //         let index = 0;
// //         let same = true;
// //         for (let j = i; j < i + word.length; j++) {
// //             if (str[j] !== word[index]) {
// //                 same = false;
// //                 break;
// //             }
// //             index += 1;
// //         }
// //         if (same) {
// //             console.log(first occurence of "${word}" is at ${i});
// //             break;
// //         }
// //     }
// // }


// Q37
// function replaceFirstOccurrence(str, space){
// {
//     for (const i of str) {
//         if (i == space) {
//             str=str.substring(i+1);
//         }
//         else{
//             break;
//         }
//     }
//  }
//  return str;
// }
// let str = "   this is";
// let space = ' ';
// console.log(replaceFirstOccurrence(str,space));

// Q38
// function replaceFirstOccurrence(str, space){
//     {
//         for (let i=str.length-1; i>=0;i--) {
//             if (str[i] == space) {
//                 str=str.substring(0,i);
//             }
//             else{
//                 break;
//             }
//         }
//      }
//      return str;
//     }
//     let str = "  this is       ";
//     let space = ' ';
//     let result=replaceFirstOccurrence(str,space);
//     console.log(`string : "${result}"`);

// Q39
// function replaceFirstOccurrence(str, space){
//     {
//             for (let i =0; i<str.length; i++) {
//                 if (str[i] == space) {
//                     str=str.substring(0,i)+str.substring(i+1);
//                     i--;
//                 }
              
//             }
//          }
//          return str;
//         }
//         let str = "    this  is       ";
//         let space = ' ';
//         let result=replaceFirstOccurrence(str,space);
//         console.log(`string : "${result}"`);