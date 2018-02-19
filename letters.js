
// var HiddenWord = function(correctWord){
//   this.correctWord = correctWord;
//   this.letters = [];
//   this.completed = false;
//     for(var i=0; i < correctWord.length; i++){
//       this.letters.push(correctWord[i]);
//     };
//     console.log('hi');
// };

// HiddenWord("bob"); //this is working too if you uncomment



// Letter constructor
var letter = function(letter) {
  this.letter = letter;
  this.guessed = false;
};

// Function to display the letter if it has been guessed
// or an underscore if it has not
letter.prototype.display = function() {
  if (this.guessed) {
    return ' ' + this.letter.toUpperCase() + ' ';
  } else {
    return ' _ ';
  }
};

// Export Letter constructor
module.exports = letter;
