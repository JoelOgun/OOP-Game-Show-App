/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase();
const game = new Game();

//console.log(`Phrase - phrase: ${phrase.phrase}`);
/*game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});*/

/* const logPhrase = (phrase) => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
*/

/* 
const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();
*/
/*
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
*/

game;
let buttonReset = document.querySelector("button#btn__reset");
buttonReset.addEventListener("click", (e) => {
  game.startGame();
});
