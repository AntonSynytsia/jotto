import { correctGuess, CORRECT_GUESS } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    //expect(action).toBe({}) // we cannot use toBe for mutable objects
    expect(action).toEqual({ type: CORRECT_GUESS }); // deep equal`
  });
});
