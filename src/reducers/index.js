import { combineReducers } from 'redux';

import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';

export default combineReducers({
  successReducer,
  guessedWordsReducer
});
