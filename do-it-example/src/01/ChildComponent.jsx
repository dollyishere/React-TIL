import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * 다앙한 프로퍼티 사용하기
 */
class ChildComponent extends Component {
  render() {
    // 다중 변수 선언할 때는 블록으로 감싸주면 됨
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue
    } = this.props;

    return (
      <div>
        <span>불리언값 : {boolValue}</span>
        <span>숫자값 : {numValue}</span>
        <span>배열값 : {arrayValue}</span>
        <span>객체값 : {String(objValue)}</span>
        <span>노드값 : {nodeValue}</span>
        <span>함수값 : {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number), // 내부에는 숫자 들어가는 배열
  objValue: PropTypes.object, 
  nodeValue: PropTypes.node, // 반드시 노드들(html 태그들)이 들어가야 함
  funcValue: PropTypes.func // 반드시 함수만 전달되어야 함
}

export default ChildComponent;