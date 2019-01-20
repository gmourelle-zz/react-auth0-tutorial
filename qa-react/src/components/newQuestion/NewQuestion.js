import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitNewQuestion, raiseError } from '../../redux/actions';
import ErrorBoundary from '../errorBoundary';
import auth0Client from '../../Auth';

class NewQuestion extends Component {
  state = {
    disabled: false,
    title: '',
    description: ''
  };

  updateDescription = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateTitle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    this.setState({
      disabled: true
    });
    this.props.submitNewQuestion(
      this.state.title,
      this.state.description,
      this.props.history
    );
    //.then(r => this.props.history.push('/'));
  };

  render() {
    const { error } = this.props;
    return (
      <ErrorBoundary error={error} raiseError={raiseError}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-primary">
                <div className="card-header">New Question</div>
                <div className="card-body text-left">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      disabled={this.state.disabled}
                      type="text"
                      name="title"
                      onChange={this.updateTitle}
                      className="form-control"
                      placeholder="Give your question a title."
                      value={this.state.title}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <input
                      disabled={this.state.disabled}
                      type="text"
                      name="description"
                      onChange={this.updateDescription}
                      className="form-control"
                      placeholder="Give more context to your question."
                      value={this.state.description}
                    />
                  </div>
                  <button
                    disabled={this.state.disabled}
                    className="btn btn-primary"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
const mapStateToProps = state => ({
  error: state.questionsReducer.error
});
export default withRouter(
  connect(
    mapStateToProps,
    { submitNewQuestion, raiseError }
  )(NewQuestion)
);
