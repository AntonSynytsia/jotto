import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {JSX.Element} - Rendered component (or null if `success` prop)
 */
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
