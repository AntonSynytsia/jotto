import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

import { Container } from 'react-bootstrap';

import { getSecretWord } from '../actions/';

const Main = ({ getSecretWord, secretWord, guessedWords, success }) => {
  return (
    <Container>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords} />
    </Container>
  );
};

Main.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired,
  getSecretWord: PropTypes.func.isRequired
};

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords
});

export default connect(mapStateToProps, { getSecretWord })(Main);
