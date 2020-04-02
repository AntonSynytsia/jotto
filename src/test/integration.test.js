import createStoreWithMiddleware from '../store';
import { guessWord } from '../actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    // setup store to share among the tests
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = createStoreWithMiddleware(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      // dispatch the guessWord action creator
      store.dispatch(guessWord(secretWord));
      // create an expected state
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      // verify that store state matches the expected state
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    // setup initial state
    const guessedWords = [
      {
        guessedWord: 'agile',
        letterMatchCount: 1
      }
    ];
    const initialState = { guessedWords, secretWord };
    // setup store shared by the tests
    let store;
    beforeEach(() => {
      store = createStoreWithMiddleware(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      // dispatch the guessWord action creator
      store.dispatch(guessWord(unsuccessfulGuess));
      // create the expected state
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      // verify store state matches the expected state
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      // dispatch the guessWord action creator
      store.dispatch(guessWord(secretWord));
      // create the expected state
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      // verify store state matches the expected state
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });
});
