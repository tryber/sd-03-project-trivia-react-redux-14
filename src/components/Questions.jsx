import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function categoryAndQuestion(questionsCategory, object, idTest) {
  return (
    <p data-testid={idTest}>
      {questionsCategory === undefined ?
        'carregando...' : questionsCategory.map((categoryOrQuest) => categoryOrQuest[object])[0]}
    </p>
  );
}

class Questions extends Component {
  render() {
    const { questionsCategory } = this.props;
    return (
      <div className="questions">
        {categoryAndQuestion(questionsCategory, 'category', 'question-category')}
        {categoryAndQuestion(questionsCategory, 'question', 'question-text')}
        <button data-testid="correct-answer">
          {questionsCategory === undefined ? 'carregando...' : questionsCategory.map((correctAnswer) =>
              correctAnswer.correct_answer)[0]}
        </button>
        {questionsCategory === undefined ? 'carregando...' : questionsCategory.map((el) =>
          el.incorrect_answers.map((incorrectAnswer, index) =>
            <button data-testid={`wrong-answer-${index}`}>
              {incorrectAnswer}
            </button>))[0]}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionsCategory: state.questionsReducer.questions.results,
});

Questions.propTypes = {
  questionsCategory: PropTypes.func,
};

export default connect(mapStateToProps)(Questions);
