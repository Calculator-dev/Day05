function main() {
  var myNoun = "dog";
  var myVerb = "ran";
  var myAdjective = "big";
  var myAdverb = "quickly";
  var wordBlanks;
  wordBlanks =
    "My " +
    myNoun +
    " can " +
    myVerb +
    " as fast as Bolt" +
    ". " +
    "He is " +
    myAdjective +
    " and he is growing " +
    myAdverb +
    ".";

  return wordBlanks;
}

console.log(main());
module.exports = main;
