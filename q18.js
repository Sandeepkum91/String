
function searchAllOccurrences(str, char) {
    let inNew = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        inNew.push(i);
      }
    }
    return inNew;
  }
  
  let inputStr = "this is san"
  let inputChar = 'i'
  
  let result = searchAllOccurrences(inputStr, inputChar);
  
  if (result.length > 0) {
    console.log(`All occurrences of '${inputChar}' are at inNew: ${result.join(', ')}`);
  } else {
    console.log(`Character '${inputChar}' not found in the string`);
  }
  