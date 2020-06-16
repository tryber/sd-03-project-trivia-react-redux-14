import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuestions, nextButton, rightAnswer, wrongAnswer, scoreToStore } from '../redux/actions/index';
import Timer from './Config/configTimer';

class Questions extends React.Component {
  componentDidMount() {
    this.props.loadQuestions();
  }

  static shuffle(answers) {
    const shuffled = answers.sort((a, b) => {
      if (a.key > b.key) {
        return -2;
      }
      return 0;
    });
    return shuffled;
  }

  renderNextButton(questionID, answered) {
    if (questionID > 3) {
      return (
        <Link to="/feedback">
          <div className="Centralize">
            <button
              type="button"
              className={answered ? 'show' : 'hide'}
              data-testid="btn-next"
            >
              Finalizar
            </button>
          </div>
        </Link>
      );
    }
    return (
      <div className="Centralize">
        <button
          type="button"
          className={answered ? 'show' : 'hide'}
          data-testid="btn-next"
          onClick={() => this.props.nextQuestion(questionID)}
        >
          Próxima
        </button>
      </div>
    );
  }

  sendUpdateScore() {
    const { addScore, questions, questionID, timer } = this.props;
    const difficultyValue = questions.results[questionID].difficulty;
    let resultValue = 1;
    if (difficultyValue === 'hard') { resultValue = 3 }
    else if (difficultyValue === 'medium') { resultValue = 2 }

    if (addScore) {
      const NewScore = ( 10 + ( timer * resultValue ));
      this.props.dispatchScore(NewScore);
      const prevState = JSON.parse(localStorage.getItem('state'));
      prevState.player.score += NewScore;
      prevState.player.assertions += 1;
      const newState = JSON.stringify(prevState);
      return (
        localStorage.setItem('state', newState)
      );
    }
  }

  renderQuestion(questions, questionID, answered, assertions) {
    const question = questions[questionID];
    return (
      <div>
        {<Timer />}
        <div>
          <h2 className="question-category">{question.category}</h2>
          <p className="question-text">{question.question}</p>
        </div>
        <div>{this.renderAnswer(question, answered, assertions)}</div>
      </div>
    );
  }

  renderAnswer(question, answered, assertions) {
    const wrongAnswer = question.incorrect_answers.map((answer, index) => (
      <button
        className={answered ? 'wrong-answer' : null}
        key={answer}
        type="button"
        value={answer}
        data-testid={`wrong-answer-${index}`}
        onClick={() => this.props.setWrongAnswer()}
        disabled={answered}
      >
        {answer}
      </button>
    ));
    const rightAnswer = (
      <button
        disabled={answered}
        className={answered ? 'correct-answer' : null}
        key={question.correct_answer}
        type="button"
        data-testid="correct-awnser"
        onClick={() => this.props.setRightAnswer(assertions)}
      >
        {question.correct_answer}
      </button>
    );
    return Questions.shuffle([...wrongAnswer, rightAnswer]);
  }

  render() {
    const { questions, questionID, answered, assertions } = this.props;
    if (!questions.results) {
      return <h3 className="GameContainer">Loading...</h3>;
    }
    return (
      <div className="GameContainer">
        {this.renderQuestion(questions.results, questionID, answered, assertions)}
        <div>
          {this.renderNextButton(questionID, answered)}
        </div>
        {this.sendUpdateScore()}
      </div>
    );
  }
}

const mapStateToProps = ({
  setRightAnswer,
  setWrongAnswer,
  nextQuestion,
  loadQuestions,
  dispatchScore,
  gameReducer: { questions, questionID, answered, assertions, timer, addScore },
}) => ({
  questions,
  questionID,
  answered,
  loadQuestions,
  nextQuestion,
  setRightAnswer,
  setWrongAnswer,
  assertions,
  timer,
  addScore,
  dispatchScore,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () => dispatch(fetchQuestions()),
  nextQuestion: (e) => dispatch(nextButton(e)),
  setRightAnswer: (e) => dispatch(rightAnswer(e)),
  setWrongAnswer: () => dispatch(wrongAnswer()),
  dispatchScore: (score) => dispatch(scoreToStore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
