export const INSERT_NAME = 'INSERT_NAME';

const initialState = {
  name: '',
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default nameReducer;
