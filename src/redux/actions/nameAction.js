import { INSERT_NAME } from '../reducers/nameReducer';

const updateName = (prop) => (
  {
    type: INSERT_NAME,
    payload: prop,
  }
);

export default updateName;
