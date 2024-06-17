
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  let input = "muninum";
  let result = isPalindrome(input);
  if (result) {
    console.log(" is Palindrome")
  } else {
    console.log("is not Palindrome");
  }