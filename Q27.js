
function replaceFirstOccurrence(str, oldChar,newChar)
{
    let index=0;
    for (const i of str) {
       if (i == oldChar) {
        str=str.substring(0,index)+newChar+str.substring(index+1);
        break;
       }
    index++;
 }
 return str;
}
let inputStr = "this is";
let oldChar = 's';
let newChar='w'
let result = replaceFirstOccurrence(inputStr, oldChar,newChar);
console.log("String after removing frist occurrence of " + oldChar+ " : "+result);

