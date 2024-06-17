
function toggle(str) {
    return str.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}


let myString = "This Is Sandeep";
let stringis = toggle(myString);
console.log(stringis); 