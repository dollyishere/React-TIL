import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  // 클래스형 컴포넌트의 this.props 값과 동일
  const { somePropValue } = props;
  // 클래스형 컴포넌트의 this.context와 동일
  const { someContextValue } = context;

  return <div> Hello, {somePropValue} </div>;
}

SFC.propTypes = { somePropValue: PropTypes.any }; // any는 java object와 비슷
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;