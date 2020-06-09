import { INSERT_EMAIL } from '../reducers/emailReducer';

const updateEmail = (prop) => (
  {
    type: INSERT_EMAIL,
    payload: prop,
  }
);

export default updateEmail;
