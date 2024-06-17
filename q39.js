
function replaceFirstOccurrence(str, space){
    {
            for (let i =0; i<str.length; i++) {
                if (str[i] == space) {
                    str=str.substring(0,i)+str.substring(i+1);
                    i--;
                }
              
            }
         }
         return str;
        }
        let str = "    this  is       ";
        let space = ' ';
        let result=replaceFirstOccurrence(str,space);
        console.log(`string : "${result}"`);