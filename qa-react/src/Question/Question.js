import React, { Component } from 'react';
import SubmitAnswer from './SubmitAnswer';
import { connect } from 'react-redux';
import { getQuestion } from '../store/reducers/selector';
import { fetchQuestions } from '../store/actions/questions';
import { submitAnswer } from '../store/actions/question';

class Question extends Component {
  componentDidMount() {
    // const {
    //   match: { params }
    // } = this.props;
    // this.props.fetchQuestion(params.questionId);
    this.props.fetchQuestions();
  }

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

const mapStateToProps = (state, props) => ({
  question: getQuestion(state, props.match.params.questionId)
});

export default connect(
  mapStateToProps,
  {
    submitAnswer,
    fetchQuestions
  }
)(Question);
