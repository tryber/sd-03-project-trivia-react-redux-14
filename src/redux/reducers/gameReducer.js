const INITIAL_STATE = {
  questions: [],
  questionID: 0, 
  answered: false, 
  stopTimer: true, 
  addScore: false,
  timer: 30,
  assertions: 0,
  score: 0,
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
        stopTimer: false,
        score: 0,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        answered: false,
        addScore: false,
        stopTimer: false,
        timer: 30,
        questionID: action.payload + 1,
      };
    case 'TIMER_DOWN':
    return {
      ...state,
      timer: action.payload - 1,
    };
    case 'WRONG_CHOICE':
    return {
      ...state,
      answered: true,
      stopTimer: true,
    };
    case 'RIGHT_CHOICE':
    return {
      ...state,
      answered: true,
      addScore: true,
      stopTimer: true,
      assertions: action.payload + 1,
    };
    case 'SCORE_STORE':
    return {
      ...state,
      score: state.score + action.payload,
    };
    default:
      return state;
  }
};

export default gameReducer;
