
function replaceFirstOccurrence(str, space){
    {
        for (let i=str.length-1; i>=0;i--) {
            if (str[i] == space) {
                str=str.substring(0,i);
            }
            else{
                break;
            }
        }
     }
     return str;
    }
    let str = "  this is       ";
    let space = ' ';
    let result=replaceFirstOccurrence(str,space);
    console.log(`string : "${result}"`);