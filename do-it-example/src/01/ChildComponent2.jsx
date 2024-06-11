import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const {
      objValue,
      requiredStringValue
    } = this.props;

    return (
      <div>
        <div>객체값 : {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue} </div>
      </div>
    );
  }
}

// PropTypes.shape를 사용하여 객체 프로퍼티를 정의하면 객체 목록을 한 눈에 확인할 수 있어 편리함
ChildComponent2.propTypes = {
  // 객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  // 필수 프로퍼티
  requiredStringValue: PropTypes.string.isRequired
}
export default ChildComponent2;