import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, nextButton } from '../redux/actions/index';

class Questions extends React.Component {
  static shuffleAnswer(allAnswers) {
    const ordenedAnswers = allAnswers.sort((a, b) => {
      if (a.key > b.key) {
        return -1;
      }
      if (a.key < b.key) {
        return 1;
      }
      return 0;
    });
    return ordenedAnswers;
  }

  componentDidMount() {
    this.props.loadQuestions();
  }

  renderAnswer(question) {
    const incorrectAnswers = question.incorrect_answers.map((answer, index) => (
      <button
        key={answer}
        type="button"
        value={answer}
        data-testid={`wrong-answer-${index}`}
      >
        {answer}
      </button>
    ));
    const correctAnswer = (
      <button
        key={question.correct_answer}
        type="button"
        data-testid="correct-awnser"
      >
        {question.correct_answer}
      </button>
    );
    return Questions.shuffleAnswer([...incorrectAnswers, correctAnswer]);
  }

  renderQuestion(questions, questionID) {
    const question = questions[questionID];
    return (
      <div>
        <div className="GameContainer">
          <p className="question-category">{question.category}</p>
          <p className="question-text">{question.question}</p>
        </div>
        <div>{this.renderAnswer(question)}</div>
      </div>
    );
  }

  renderNextButton(questionID) {
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={() => this.props.nextQuestion(questionID)}
      >
        Próxima
      </button>
    );
  }

  render() {
    const { questions, questionID } = this.props;
    if (!questions.results) {
      return <h3 className="GameContainer">Loading...</h3>;
    }
    return (
      <div className="GameContainer">
        {this.renderQuestion(questions.results, questionID)}
        {this.renderNextButton(questionID)}
      </div>
    );
  }
}

const mapStateToProps = ({
  nextQuestion,
  loadQuestions,
  gameReducer: { questions, questionID },
}) => (
    { questions, questionID, loadQuestions, nextQuestion }
);

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () => dispatch(fetchQuestions()),
  nextQuestion: (e) => dispatch(nextButton(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
