const tokenAPI = () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => localStorage.setItem('token', data.token))
);

export default tokenAPI;
