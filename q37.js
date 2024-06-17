
function replaceFirstOccurrence(str, space){
    {
        for (const i of str) {
            if (i == space) {
                str=str.substring(i+1);
            }
            else{
                break;
            }
        }
     }
     return str;
    }
    let str = "   this is";
    let space = ' ';
    console.log(replaceFirstOccurrence(str,space));