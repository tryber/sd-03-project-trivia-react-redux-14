const questionsApi = () => {
  const token = localStorage.getItem('token');
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default questionsApi;
