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
    document.querySelector("div#overlay").style.display = "none";
    this.getRandomPhrase();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

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
    const gameOverMessage = document.getElementById("game-over-message");
    if (gameWon) {
      overLay.className = "win";
      gameOverMessage.textContent =
        "Can you guess the phrase Winner? Congratulations !!";
    } else {
      overLay.className = "lose";
      gameOverMessage.textContent = "Sorry try again";
    }
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    console.log(button);
    button.disabled = true;
    const chosenLetter = this.activePhrase.checkLetter(button.textContent);
    if (!chosenLetter) {
      button.classList.add("wrong");
      this.removeLife();
    } else {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      // if  player wins
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }
  // Resets Game
  resetGame() {
    const ul = document.querySelector("#phrase ul");
    ul.innerHTML = "";
    const keys = document.querySelectorAll(".key");
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].classList.remove("chosen", "wrong");
    }
    const hearts = document.querySelectorAll("#scoreboard ol li");
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].src = "images/liveHeart.png";
    }
  }
}
