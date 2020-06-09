export const QUESTIONS = 'QUESTIONS';

const initialState = {
  questions: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};

export default questionsReducer;