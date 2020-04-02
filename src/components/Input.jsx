import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <Form className="d-flex">
        <Form.Control
          data-test="input-box"
          type="text"
          placeholder="Enter guess"
        />
        <Button
          data-test="submit-button"
          variant="primary"
          type="submit"
          className="flex-shrink-0 ml-1"
        >
          Submit
        </Button>
      </Form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

Input.propTypes = {
  success: PropTypes.bool.isRequired
};

const mapStateToProps = ({ successReducer: { success } }) => {
  return {
    success
  };
};

export default connect(mapStateToProps)(Input);
