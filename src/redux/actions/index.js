export const updateInput = (value, name) => ({
  type: 'UPDATE_INPUT',
  value,
  name,
});

export const updateQuestions = (payload) => ({
  type: 'SEND_QUESTIONS',
  payload,
});

export const nextButton = (payload) => ({
  type: 'NEXT_QUESTION',
  payload,
});

export const requestData = () => ({
  type: 'REQUEST_QUESTIONS',
});

export const fetchQuestions = () => (dispatch) => {
  const token = localStorage.token;
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
  dispatch(requestData());
  fetch(url)
    .then((data) => data.json())
    .then((payload) => dispatch(updateQuestions(payload)));
};

export const rightAnswer = (payload) => ({
  type: 'RIGHT_CHOICE',
  payload,
});

export const wrongAnswer = () => ({
  type: 'WRONG_CHOICE',
});

export const timerDown = (payload) => ({
  type: 'TIMER_DOWN',
  payload,
});

export const scoreToStore = (payload) => ({
  type: 'SCORE_STORE',
  payload,
});
