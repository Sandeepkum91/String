
let string1="hello world 2024";
let charcount=0;
let numcount=0;
for (const i of string1) {
let charA=i.charCodeAt(0);
if(charA>=65 && charA<=90 || charA>=97 && charA<=122){
    charcount++;
    
}
else if(charA>=48 && charA<=57){
    numcount++;
}
}
console.log("Character count: "+charcount);
console.log("Number count: "+numcount);