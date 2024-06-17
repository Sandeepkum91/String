
function removeLastOccurrence(str, char) {
    let lastIndex = str.lastIndexOf(char);
    


    if (lastIndex !== -1) {
      str = str.substring(0, lastIndex) + str.substring(lastIndex + 1);
    }
    return str;
  }
  
  let inputStr = "this is Sandep";
  let inputChar = 'e';
  
  let result = removeLastOccurrence(inputStr, inputChar);
  
  console.log("String after removing last occurrence of " +inputChar+ ":"+result);