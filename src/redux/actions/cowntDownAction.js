import { COUNT_DOWM } from '../reducers/questionsReducer';

const cownDown = (prop) => (
  {
    type: COUNT_DOWM,
    payload: prop,
  }
);

export default cownDown;
