import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const categoryAndQuestion = (questionsCategory, object, idTest) => {
  return(
    <p data-testid={idTest}>
      {questionsCategory === undefined ? 'carregando...' : questionsCategory.map(el=>el[object])[0]}
    </p>
  )
}

class Questions extends Component {
  render() {
    const { questionsCategory } =this.props;
    return (
      <div className="questions">
        {categoryAndQuestion(questionsCategory, "category", "question-category")}
        {categoryAndQuestion(questionsCategory, "question", "question-text")}
          {questionsCategory === undefined ? 'carregando...' : questionsCategory.map(el => 
            <button data-testid="correct-answer">
              {el.correct_answer}
            </button>)[0]}
          {questionsCategory === undefined ? 'carregando...' : questionsCategory.map(el =>
            el.incorrect_answers.map((el,index) => 
            <button data-testid={`wrong-answer-${index}`}>
              {el}
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

Questions.defaultProps = {
  questionsCategory: '',
};

export default connect(mapStateToProps)(Questions);
