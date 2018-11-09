import auth0Client from '../Auth';
import axios from 'axios';

const urlQuestions = process.env.REACT_APP_DB_API;

export const getQuestions = () =>
  fetch(urlQuestions)
    .then(data => data.json())
    .then(question_data => question_data)
    .catch(err => err);

export const postNewQuestion = (title, description) =>
  axios
    .post(
      urlQuestions,
      {
        title,
        description
      },
      {
        headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
      }
    )
    .then(question_data => question_data.data.question)
    .catch(err => err);
// return dispatch => {
//   dispatch(submitAnswerRequest());

//   return fetch(`http://localhost:8081/answer/${questionId}`, {
//     method: 'POST',
//     body: JSON.stringify(answer),
//     headers: new Headers({
//       'Content-type': 'application/json',
//       Authorization: `Bearer ${auth0Client.getIdToken()}`
//     })
//   })
//     .then(question_data =>
//       dispatch(submitAnswerSuccess(question_data.data.question))
//     )
//     .catch(err => getError(err));
// };

export const postAnswer = (questionId, answer) =>
  axios
    .post(
      `${urlQuestions}answer/${questionId}`,
      {
        answer
      },
      {
        headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
      }
    )
    .then(question_data => question_data.data.question)
    .catch(err => err);
//componentdidcatch
//el catch en los actions
//componentdidmount en Question.js y actualizar el mismo questionsss en el store
//hacer REST la api. Ver de poder editar las respuestas para hacerle .put en la api
//iba a usar un HOC para algo. Para el manejo de errores?
//similar a statusAgent, si hay un error, que wrappe el component o lo que tiene que mostrar

