
function findFirstOccurrence(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1; 
  }
  
  let inputStr = "This is Sandeep";
  let inputChar = "z"
  
  let result = findFirstOccurrence(inputStr, inputChar);
  
  if (result !== -1) {
    console.log("First occurrence of "+inputChar+" is at index: "+result);
  } else {
    console.log("Character "+inputChar+ " not found in the string");
  }
