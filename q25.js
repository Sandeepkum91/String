
function allOccurrence(str, Char)
{
    let index=0;
    let str1=str;
    for (const i of str) {
       if (i == Char) {
        str1=str1.substring(0,index)+str1.substring(index+1);
       }
       else{
       index++;
       }
    
 }
 return str1;
}
let inputStr = "this is";
let inputChar = 's';
let result = allOccurrence(inputStr, inputChar);
console.log("String after all  occurrence remove " + inputChar + " : "+result);
