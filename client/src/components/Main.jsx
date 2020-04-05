import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import TotalGuesses from './TotalGuesses';

import { Container } from 'react-bootstrap';

import { getSecretWord } from '../actions/';

import { Spinner } from 'react-bootstrap';

export class UnconnectedMain extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;

    return (
      <Container>
        <h1>Jotto</h1>
        {secretWord !== null ? (
          <Fragment>
            <div className="mb-3">The secret word is {secretWord}</div>
            <Congrats success={success} />
            <Input />
            <GuessedWords guessedWords={guessedWords} />
            <TotalGuesses />
          </Fragment>
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Container>
    );
  }
}

UnconnectedMain.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  getSecretWord: PropTypes.func.isRequired,
};

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords,
});

export default connect(mapStateToProps, { getSecretWord })(UnconnectedMain);
