function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
  }
  
  let input = "Today is Monday";
  let result = reverseWords(input);
  console.log("input string: "+input);
  console.log("result: "+result); 
 