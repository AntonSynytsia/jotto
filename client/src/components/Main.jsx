import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

import { Container } from 'react-bootstrap';

import { getSecretWord } from '../actions/';

export class UnconnectedMain extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;

    return (
      <Container>
        <h1>Jotto</h1>
        <div>The secret word is {secretWord}</div>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </Container>
    );
  }
}

UnconnectedMain.propTypes = {
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

export default connect(mapStateToProps, { getSecretWord })(UnconnectedMain);
