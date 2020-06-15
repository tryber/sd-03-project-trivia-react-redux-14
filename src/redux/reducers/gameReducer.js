const INITIAL_STATE = {
  questions: [],
  questionID: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_QUESTIONS':
      return {
        ...state,
        isFetching: true,
      };
    case 'SEND_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
      };
    case 'NEXT_BUTTON':
      return {
        ...state,
        questionID: action.payload + 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
