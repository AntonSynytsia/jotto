import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'react-bootstrap';

/**
 * Functional React component for congratulatory message.
 * @function Congrats
 * @returns {JSX.Element} Rendered component
 */
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && (
        <Alert data-test="congrats-message" variant="success">
          Congratulations! You guessed the word!
        </Alert>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
