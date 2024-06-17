
function replaceLastOccurrence(str, oldChar,newChar)
{
    for (let i = str.length - 1; i >= 0; i--) {
       if (str[i] == oldChar) {
        str=str.substring(0,i)+newChar+str.substring(i+1);
        break;
       }
    
 }
 return str;
}
let inputStr = "this is";
let oldChar = 's';
let newChar='w'
let result = replaceLastOccurrence(inputStr, oldChar,newChar);
console.log("String after removing frist occurrence of " + oldChar+ " : "+result);
