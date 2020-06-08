const url = 'https://opentdb.com/api_token.php?command=request';

const tokenApi = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => localStorage.setItem('token', data.token));
};

export default tokenApi;
