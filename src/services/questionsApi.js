import { connect } from 'react-redux';
import updateQuestions from '../redux/actions/questionsAction';

const questionsApi = () => {
  const token = localStorage.getItem('token');
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const mapDispatchToProps = (dispatch) => ({
  dispatchQuestions: (e) => dispatch(updateQuestions(e)),
});

export default connect(
  null,
  mapDispatchToProps,
)(questionsApi);
