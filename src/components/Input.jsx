import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';

import { guessWord } from '../actions/';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);

    this.state = {
      currentGuess: ''
    };
  }

  handleInputTextChange(e) {
    this.setState({ currentGuess: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord.trim().length !== 0) {
      this.props.guessWord(guessedWord);
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <Form className="d-flex">
        <Form.Control
          data-test="input-box"
          type="text"
          placeholder="Enter guess"
          value={this.state.currentGuess}
          onChange={this.handleInputTextChange}
        />
        <Button
          data-test="submit-button"
          variant="primary"
          type="submit"
          className="flex-shrink-0 ml-1"
          onClick={this.handleClick}
        >
          Submit
        </Button>
      </Form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

UnconnectedInput.propTypes = {
  success: PropTypes.bool.isRequired,
  guessWord: PropTypes.func.isRequired
};

const mapStateToProps = ({ success }) => {
  return {
    success
  };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
