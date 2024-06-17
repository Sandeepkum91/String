
function replaceFirstOccurrence(str, oldChar)
{
    let index=0;
    for (const i of str) {
       if (i == oldChar) {
        str=str.substring(0,index)+str.substring(index+1);
       }
    index++;
 }
 return str;
}
let inputStr = "this is";
let inputChar = 's';
let result = replaceFirstOccurrence(inputStr, inputChar);
console.log("String after removing frist occurrence of " + inputChar + " : "+result);
