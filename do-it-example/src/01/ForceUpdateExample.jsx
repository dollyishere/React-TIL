import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    // 클래스 변수로 초깃값 정의
    this.loading = true;
    this.formData = 'no data';
    // 이후 콜백 함수를 다룰 때 bind(this)에 대해 자세히 이야기할 예정
    this.handleData = this.handleData.bind(this); // => this를 반환 함수로 내보낼 때는 반드시 bind로 묶어서 내보낼 것
    // 4초 후에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    // state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate(); // 컴포넌트 내장 함수 forceUpdate()를 호출하여 강제로 화면 새로고침
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다 */}
        <span>로딩중: {String(this.loading)} </span>
        <span>결과: {this.formData} </span>
      </div>
    );
  }
}

export default ForceUpdateExample;