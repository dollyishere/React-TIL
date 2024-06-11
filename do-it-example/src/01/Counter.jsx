import React, { Component } from 'react';

// 처음 생성될 때만 프로퍼티 값으로 state 값을 설정하므로, 갱신 과정에서는 state 값이 변경되지 않음
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count 초기값을 프로퍼티 전달 값으로 설정
      count: props.count
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({count}) => ({
      count : count + 1
    }));
  }
  render() {
    return (
      <div>
        현재 카운트 : {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>     
      </div>
    );
  }
}

export default Counter;