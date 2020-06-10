import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/questions.css';

function categoryAndQuestion(questionsCategory, object, idTest) {
  return (
    <p data-testid={idTest}>
      {questionsCategory === undefined ?
        'carregando...' : questionsCategory.map((categoryOrQuest) => categoryOrQuest[object])[0]}
    </p>
  );
}

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }


  toggleClass() {
    this.setState({
      answer: true,
    });
  }

  render() {
    const { questionsCategory } = this.props;
    const { answer, disabledButton } = this.state;
    return (
      <div className="questions">
        {categoryAndQuestion(questionsCategory, 'category', 'question-category')}
        {categoryAndQuestion(questionsCategory, 'question', 'question-text')}
        {questionsCategory === undefined ? 'loading...' : questionsCategory.map((correctAnswer) =>
          <button
            className={answer ? 'correct-answer' : null}
            data-testid="correct-answer"
            onClick={() => this.toggleClass()}
            disabled={disabledButton}
          >
            {correctAnswer.correct_answer}
          </button>)[0]}
        {questionsCategory === undefined ? 'loading...' : questionsCategory.map((el) =>
          el.incorrect_answers.map((incorrectAnswer, index) =>
            <button
              disabled={disabledButton}
              className={answer ? 'wrong-answer' : null}
              data-testid={`wrong-answer-${index}`}
              key={incorrectAnswer}
              onClick={() => this.toggleClass()}
            >
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
  questionsCategory: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps)(Questions);
