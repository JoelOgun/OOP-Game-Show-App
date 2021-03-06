/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i) !== " ") {
        const elementLi = document.createElement("li");
        elementLi.setAttribute("class", `hide letter ${this.phrase.charAt(i)}`);
        document.querySelector("div#phrase ul").appendChild(elementLi);
        elementLi.textContent = `${this.phrase.charAt(i)}`;
      } else {
        const elementLi = document.createElement("li");
        elementLi.setAttribute("class", `space`);
        document.querySelector("div#phrase ul").appendChild(elementLi);
        elementLi.textContent = " ";
      }
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const displayLetter = document.getElementsByClassName("letter");
    if (this.checkLetter(letter)) {
      for (let i = 0; i < displayLetter.length; i++) {
        if (displayLetter[i].classList.contains(letter)) {
          displayLetter[i].classList.remove("hide");
          displayLetter[i].classList.add("show");
        }
      }
    }
  }
}
