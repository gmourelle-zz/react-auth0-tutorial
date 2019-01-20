import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions } from '../../redux/selectors';
import { fetchQuestions } from '../../redux/actions';
import Loading from '../loading';
class Questions extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, fetchingQuestions } = this.props;
    return (
      <Loading loading={fetchingQuestions}>
        <div className="container">
          <div className="row">
            <Link to="/new-question">
              <div className="card text-white bg-secondary mb-3">
                <div className="card-header">Need help? Ask here!</div>
                <div className="card-body">
                  <h4 className="card-title">+ New Question</h4>
                  <p className="card-text">Don't worry. Help is on the way!</p>
                </div>
              </div>
            </Link>
            {!questions && <p>Loading questions...</p>}
            {questions &&
              questions.map(question => (
                <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                  <Link to={`/question/${question.id}`}>
                    <div className="card text-white bg-success mb-3">
                      <div className="card-header">
                        Answers: {question.answers.length}
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{question.title}</h4>
                        <p className="card-text">{question.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </Loading>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuestions
    },
    dispatch
  );

const mapStateToProps = state => ({
  questions: getQuestions(state),
  fetchingQuestions: state.questionsReducer.fetchingQuestions,
  updatingQuestion: state.questionsReducer.updatingQuestion
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
