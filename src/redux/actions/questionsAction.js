import { QUESTIONS } from '../reducers/questionsReducer';

const updateQuestions = (prop) => (
  {
    type: QUESTIONS,
    payload: prop,
  }
);

export default updateQuestions;
