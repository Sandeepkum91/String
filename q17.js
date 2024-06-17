
function findLastOccurrence(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] == char) {
        return i;
      }
    }
    return -1;
  }
  
  let inputStr = "thsisham"
  let inputChar = 'm'
  
  let lastIndex = findLastOccurrence(inputStr, inputChar);
  
  if (lastIndex !== -1) {
    console.log(`Last occurrence of '${inputChar}' is at index ${lastIndex}`);
  } else {
    console.log(`Character '${inputChar}' not found in the string`);
  }