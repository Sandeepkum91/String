
function replaceAllOccurrence(str, oldChar,newChar)
{
    let index=0;

    for (const i of str) {
       if (i == oldChar) {
        str=str.substring(0,index)+ newChar +str.substring(index+1);
       }
    index++;
 }
 return str;
}
let inputStr = "this is";
let oldChar = 's';
let newChar = 'p';
let result = replaceAllOccurrence(inputStr, oldChar,newChar);
console.log("String after removing all occurrence of " + oldChar + " : "+result);
