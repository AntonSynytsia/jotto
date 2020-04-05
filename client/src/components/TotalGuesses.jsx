import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TotalGuesses = ({ guessCount }) => {
  return (
    <div className="mt-3" data-test="status-text">
      Total guesses: {guessCount}
    </div>
  );
};

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  guessCount: state.guessedWords.length,
});

export default connect(mapStateToProps)(TotalGuesses);
