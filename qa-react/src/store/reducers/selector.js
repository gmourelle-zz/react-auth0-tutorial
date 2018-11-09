export const getQuestions = state =>
  Object.values(state.questionsReducer.questions);

export const getQuestion = (state, id) => state.questionsReducer.questions[id];
