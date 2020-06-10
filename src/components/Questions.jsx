import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    const { questions } =this.props;
    return (
      <div className="questions">{console.log(questions)}
        <h3>Category: </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionsReducer.questions,
});

Questions.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  dispatchEmail: PropTypes.func,
  dispatchName: PropTypes.func,
};

Questions.defaultProps = {
  email: '',
  name: '',
  dispatchEmail: '',
  dispatchName: '',
};

export default connect(mapStateToProps)(Questions);
