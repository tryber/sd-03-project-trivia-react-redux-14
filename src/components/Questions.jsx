import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from './Timer';

import '../styles/questions.css';
import updateAswer from '../redux/actions/answerAction';

function categoryAndQuestion(questionsCategory, object, idTest, numb) {
  return (
    <p data-testid={idTest}>
      {questionsCategory.map((categoryOrQuest) => categoryOrQuest[object])[numb]}
    </p>
  );
}

const Questions = ({ questionsCategory,
  updateQuestions,
  questionNumber: { questionNumber, loged, answer } }) => {
  if (!loged) return <Redirect to="/" />;
  return (
    <div className="questions">
      {categoryAndQuestion(questionsCategory, 'category', 'question-category', questionNumber)}
      {categoryAndQuestion(questionsCategory, 'question', 'question-text', questionNumber)}
      {questionsCategory.map((correctAnswer) =>
        <button
          className={answer ? 'correct-answer' : null}
          data-testid="correct-answer"
          onClick={() => updateQuestions(questionNumber)}
          disabled={answer}
        >
        {correctAnswer.correct_answer}
        </button>)[questionNumber]}
      {questionsCategory.map((el) =>
        el.incorrect_answers.map((incorrectAnswer, index) =>
          <button
            disabled={answer}
            className={answer ? 'wrong-answer' : null}
            data-testid={`wrong-answer-${index}`}
            key={incorrectAnswer}
            onClick={() => updateQuestions(questionNumber)}
          >
            {incorrectAnswer}
          </button>))[questionNumber]}
      {<Timer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questionsCategory: state.questionsReducer.questions.results,
  questionNumber: state.questionsReducer,
});

const dispatchPropsToState = (dispatch) => ({
  updateQuestions: () => dispatch(updateAswer()),
});

Questions.propTypes = {
  questionsCategory: PropTypes.string,
  questionNumber: PropTypes.number,
  updateQuestions: PropTypes.func,
};

Questions.defaultProps = {
  questionsCategory: '',
  questionNumber: '',
  updateQuestions: '',
};

export default connect(mapStateToProps, dispatchPropsToState)(Questions);
