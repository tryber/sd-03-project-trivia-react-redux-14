const url = 'https://opentdb.com/api_token.php?command=request';

const tokenApi = async (dispatchQuestions) => (
  await fetch(url)
    .then((response) => response.json())
    .then((data) => localStorage.setItem('token', data.token)),
  await fetch(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`)
      .then((response) => response.json())
      .then((data) => dispatchQuestions(data))
);

export default tokenApi;
