const URL = 'https://opentdb.com/api.php?amount=5&token=';

getQuestions = (token) => {
  fetch(`${URL}${token}`)
    .then((response) => response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
};

export default getQuestions;
