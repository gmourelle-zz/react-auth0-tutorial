//import { createSelector } from 'reselect';

export const getQuestions = state => state.app.questions.questions;
export const getQuestion = state => state.app.question.question;

// const getPlayerByAge = (p, age) =>
//   age ? parseInt(age, 10) === ageFromDate(p.dateOfBirth) : true;

// const getPlayerByPosition = (p, position) =>
//   position ? p.position === position : true;

// const getPlayerByName = (p, name) =>
//   name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;

// export const getFilteredPlayers = createSelector(
//   [getPlayers, getFilter],
//   (players, filter) =>
//     players.filter(
//       p =>
//         getPlayerByAge(p, filter.age) &&
//         getPlayerByPosition(p, filter.position) &&
//         getPlayerByName(p, filter.name)
//     )
// );
