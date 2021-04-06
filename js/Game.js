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
      new Phrase("Life is like a box of chocolates"),
      new Phrase("There is no trying"),
      new Phrase("May the force be with you"),
      new Phrase("You have to see the matrix for yourself"),
      new Phrase("You talking to me"),
    ];
    /* const phrases = [
      { phrase: new Phrase("Life is like a box of chocolates") },
      { phrase: new Phrase("There is no trying") },
      { phrase: new Phrase("May the force be with you") },
      { phrase: new Phrase("You have to see the matrix for yourself") },
      { phrase: new Phrase("You talking to me") },
    ]; */
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
    //this.phrases[randomPhrase];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.querySelector("div#overlay").style.display = "none";
    this.getRandomPhrase();
    this.activePhrase = this.getRandomPhrase();
    //const selectedPhrase = new Phrase();
    this.activePhrase.addPhraseToDisplay();
    //this.activePhrase.addPhraseToDisplay();
  }

  //handleInteraction()

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const letterLeft = document.querySelectorAll(".hide");
    if (letterLeft.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed++;
    let lives = document.querySelector(".tries");
    let heart = lives.firstChild;
    lives.classList.remove("tries");
    heart.src = "images/lostHeart.png";
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */

  gameOver(gameWon) {
    const overLay = document.getElementById("overlay");
    overLay.style.display = "";
    overLay.style.opacity = 1;
    overLay.style.transition = "all 1s";
    setTimeout(() => {
      overLay.style.opacity = 1;
    }, 100);
    const h1 = document.getElementById("game-over-message");
    if (gameWon) {
      overLay.className = "win";
      h1.textContent = "Can you guess the phrase Winner? Congratulations !!";
    } else {
      overLay.className = "lose";
      h1.textContent = "Sorry try again";
    }
  }
}
