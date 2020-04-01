import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

import { Container } from 'react-bootstrap';

const Main = () => {
  return (
    <Container>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'train',
            letterMatchCount: 3
          }
        ]}
      />
    </Container>
  );
};

Main.propTypes = {};

export default Main;
