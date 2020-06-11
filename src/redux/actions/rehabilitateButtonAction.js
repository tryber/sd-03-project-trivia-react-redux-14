import { REHABILITATE_BUTTON } from '../reducers/questionsReducer';

const rehabilitate = (questionNumber) => (
  {
    type: REHABILITATE_BUTTON,
    payload: questionNumber,
  }
);

export default rehabilitate;
