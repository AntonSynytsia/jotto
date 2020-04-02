/**
 * @method getLetterMatchCount
 * @param {*} guessedWord - Guessed word.
 * @param {*} secretWord - Secret word
 * @returns {number} - Number of unique letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  //   let c = 0;
  //   let usedLetters = [];
  //   for (let i = 0; i < guessedWord.length; ++i) {
  //     const letter = guessedWord[i];
  //     if (secretWord.includes(letter) && !usedLetters.includes(letter)) {
  //       ++c;
  //       usedLetters.push(letter);
  //     }
  //   }
  //   return c;
  const secretLetterSet = new Set(secretWord);
  const guessedLetterSet = new Set(guessedWord);
  const commonLettersCount = [...secretLetterSet].filter(x =>
    guessedLetterSet.has(x)
  ).length;
  return commonLettersCount;
}
