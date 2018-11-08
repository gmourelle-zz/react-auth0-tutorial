import React, { Component } from 'react';
import SubmitAnswer from './SubmitAnswer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestion } from '../store/reducers/selector';
import { submitAnswer } from '../store/actions/question';

class Question extends Component {
  submitAnswer = (questionId, answer) => {
    return this.props.submitAnswer(questionId, answer);
  };

  render() {
    const { question } = this.props;

    if (!question) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{question.title}</h1>
            <p className="lead">{question.description}</p>
            <hr className="my-4" />
            <SubmitAnswer
              questionId={question.id}
              submitAnswer={this.submitAnswer}
            />
            <p>Answers:</p>
            {question.answers &&
              question.answers.map((answer, idx) => (
                <p className="lead" key={idx}>
                  {answer.answer}
                </p>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submitAnswer
    },
    dispatch
  );

const mapStateToProps = (state, props) => ({
  //question: getQuestion(state, this.props.match.params)
  question: getQuestion(state, props.match.params.questionId)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
