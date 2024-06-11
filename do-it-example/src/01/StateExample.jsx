import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = { // 컴포넌트에서 관리하려는 변수 state 초깃값을 this.state에 객체 형태로 정의
      loading: true,
      formData: 'no data'
    };
    // 이후 콜백 함수를 다룰 때 bind(this)에 대해 자세히 이야기할 예정
    this.handleData = this.handleData.bind(this); // => this를 반환 함수로 내보낼 때는 반드시 bind로 묶어서 내보낼 것
    // 4초 후에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const {formData} = this.state; // component 특수 변수 this.state를 사용하여 state 값에 접근함
    // state 변경
    this.setState( { // 컴포넌트 내장 함수 this.setState() 사용해 state 값을 젼경
      loading: false,
      formData: data + formData
    })
    // this.state.loading은 현재 true입니다
    console.log('loading값', this.state.loading);
    // 이후 호출될 render() 함수에서의 this.state.loading은 false입니다
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다 */}
        <span>로딩중: {String(this.state.loading)} </span>
        <span>결과: {this.state.formData} </span>
      </div>
    );
  }
}

export default StateExample;