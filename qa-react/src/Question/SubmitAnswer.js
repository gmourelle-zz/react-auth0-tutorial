import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../Auth/Auth';

class SubmitAnswer extends Component {
  state = {
    answer: ''
  };

  updateAnswer = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = () => {
    this.props.submitAnswer(this.props.questionId, this.state.answer);

    this.setState({
      answer: ''
    });
  };

  render() {
    if (!auth0Client.isAuthenticated()) return null;
    return (
      <Fragment>
        <div className="form-group text-center">
          <label htmlFor="exampleInputEmail1">Answer:</label>
          <input
            type="text"
            name="answer"
            onChange={this.updateAnswer}
            className="form-control"
            placeholder="Share your answer."
            value={this.state.answer}
          />
        </div>
        <button className="btn btn-primary" onClick={this.submit}>
          Submit
        </button>
        <hr className="my-4" />
      </Fragment>
    );
  }
}

export default withRouter(SubmitAnswer);
