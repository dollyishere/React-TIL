import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodaysPlanApp extends Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;

    return (
      <div className='body'>
        {hasPlan ? <TodaysPlan/> : null }
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}

export default TodaysPlanApp;