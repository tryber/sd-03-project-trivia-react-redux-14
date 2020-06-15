export const QUESTIONS = 'QUESTIONS';
export const ANSWER_REDUCER = 'ANSWER_REDUCER';
export const REHABILITATE_BUTTON = 'REHABILITATE_BUTTON';
export const COUNT_DOWM = 'COUNT_DOWM';

const initialState = {
  loged: false,
  answer: false,
  timer: 2,
  questionNumber: 0,
  questions: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loged: true,
      };
    case ANSWER_REDUCER:
      return {
        ...state,
        answer: true,
      };
    case REHABILITATE_BUTTON:
      return {
        ...state,
        answer: false,
        timer: 2,
        questionNumber: action.payload + 1,
      };
    case COUNT_DOWM:
      return {
        ...state,
        timer: action.payload - 1,
      };
    default:
      return state;
  }
};

export default questionsReducer;
