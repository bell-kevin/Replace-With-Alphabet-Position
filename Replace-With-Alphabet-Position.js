 function alphabetPosition(text) {
  //split string into array of letters only
  let sentence = text.toLowerCase().split("");
  for (let i = sentence.length - 1; i >= 0; i--) {
    if(sentence[i].match(/[a-z]/) === null) {
      sentence.splice(i, 1);
    }
  }
  //create an array of alphabets (97 represents lower case "a", 65 would be "A")
  let alphaArr = [];
  for (let i = 0; i < 26; i++) {
    alphaArr.push(String.fromCharCode(97 + i));
  }
  //replace each letter with its index in the alphabet
  return sentence.map(item => alphaArr.indexOf(item) + 1).join(" ");
}
