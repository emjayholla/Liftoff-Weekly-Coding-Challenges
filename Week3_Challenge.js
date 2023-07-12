function LongestWord(sen) { 
  let strSplit = sen.split(" ");
  let longestWord = ""
  for(let i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i]
      }
  }
    // code goes here  
    return longestWord; 
  
  }
  // keep this function call here 
  console.log(LongestWord(readline()));