/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
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
}
