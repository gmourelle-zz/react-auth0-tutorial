import auth0Client from '../Auth';
import axios from 'axios';

const urlQuestions = process.env.REACT_APP_DB_API;

export const getQuestions = () =>
  fetch(urlQuestions)
    .then(data => data.json())
    .then(question_data => question_data);

export const getQuestion = id =>
  fetch(`${urlQuestions}${id}`)
    .then(data => data.json())
    .then(question_data => question_data);

export const postNewQuestion = (title, description) =>
  axios
    .post(
      process.env.REACT_APP_DB_API,
      {
        title,
        description
      },
      {
        headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
      }
    )
    .then(question_data => question_data.data.question);

export const postAnswer = (questionId, answer) =>
  axios
    .post(
      `${urlQuestions}${questionId}/answer`,
      {
        answer
      },
      {
        headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
      }
    )
    .then(question_data => question_data.data.question);

//iba a usar un HOC para algo. Para el manejo de errores?
//similar a statusAgent, si hay un error, que wrappe el component o lo que tiene que mostrar
