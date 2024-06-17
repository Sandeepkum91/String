function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  let input = "Sandeep";
  let reversed = reverseString(input);
  
 console.log("input string: "+input);
  console.log("Reversed string: "+reversed);