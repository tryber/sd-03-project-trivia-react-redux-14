export const INITIAL_STATE = {
  name: '',
  email: '',
};

const inputChanges = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    default: return state;
  }
};

export default inputChanges;
