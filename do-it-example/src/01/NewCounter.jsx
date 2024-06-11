import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }
  
  // App 컴포넌트부터 갱신된 프로퍼티 값 동기화
  static getDerivedStateFromProps(props, state) { 
    const { count } = props;
    return {
      // 프로퍼티에서 전달된 count 값 보관
      count,
      newCount: count === state.count
      // 프로퍼티가 변경되지 않았을 시 기존 state 값으로 설정
      ? state.newCount
      // 프로퍼티 변경되었을 시 변경된 프로퍼티 값으로 설정
      : count
    }
  }

  // getDerivedStateFromProps는 다른 프로퍼티가 변경되어도 호출 가능하기에,
  // state.newCount로 증가값 관리
  increaseCount() {
    this.setState(({newCount}) => ({
      newCount: newCount + 1
    }));
  }

  render() {
    return (
      <div>
        현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>      
      </div>
    );
  }
}

export default NewCounter;