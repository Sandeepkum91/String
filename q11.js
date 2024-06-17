
const countVowelsAndConsonants = (str) => {
    const vowels = 'aeiouAEIOU';
    let vowelsCount = 0;
    let consonantsCount = 0;
  
    for (const char of str) {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else if (char.toLowerCase() !== char.toUpperCase()) {
        consonantsCount++;
      }
    }
    console.log("vowelCount: "+vowelsCount);
    console.log("consonantsCount: "+consonantsCount);
  };
  
  countVowelsAndConsonants('Hello sandeep');
  