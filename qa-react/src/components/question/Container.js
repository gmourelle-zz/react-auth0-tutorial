import { connect } from 'react-redux';
import { getQuestion } from '../../redux/selectors';
// import { fetchQuestions } from '../store/actions/questions';
import { submitAnswer, fetchQuestions } from '../../redux/actions';
import Question from './Question';

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
