/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      { phrase: "Life is like a box of chocolates" },
      { phrase: "There is no trying" },
      { phrase: "May the force be with you" },
      { phrase: "You have to see the matrix for yourself" },
      { phrase: "You talking to me" },
    ];
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.querySelector("div#overlay").hidden;
    this.getRandomPhrase();
    this.activePhrase = this.getRandomPhrase();
    //const selectedPhrase = new Phrase();
    this.activePhrase.addPhraseToDisplay();
  }
}
