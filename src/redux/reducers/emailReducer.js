export const INSERT_EMAIL = 'INSERT_EMAIL';

const initialState = {
  email: '',
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
