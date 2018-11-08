export const getQuestions = state =>
  Object.values(state.questionsReducer.questions);

// export const getQuestion = (state, id) =>
// Object.values(state.questionsReducer.questions).filter(
//   question => question.id === id
// );

export const getQuestion = (state, id) => state.questionsReducer.questions[id];
