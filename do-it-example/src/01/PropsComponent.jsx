import React, { Component } from 'react';
import PropTypes from 'prop-types' // 라이브러리 import

class PropsComponent extends Component {
  render() {
    return (
      <div className='message-container'>
        {this.props.name} /* name 프로퍼티로 받은 문자열 출력 */
      </div>
    );
  }
}

PropsComponent.propTypes = { // propTypes라는 특수 변수를 사용하여 프로퍼티 자료형 정의
  name : PropTypes.string // 프로퍼티의 자료형을 객체 형태로 지정하여 PropsComponent.propTypes에 저장
}

export default PropsComponent;