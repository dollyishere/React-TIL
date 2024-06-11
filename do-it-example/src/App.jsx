
import './App.css';
import React, { Component } from 'react';
import Input from './01/input';

class App extends Component {
  constructor(props) {
    super(props);
    // 변수 설정
    this.state = { 
      productName : '',
      makerName: '',
      price : 0,
      count: 1,
      contact: '',
     };

     // 함수들 bind
     this.handleInputChange = this.handleInputChange.bind(this);
     this.onFocus = this.onFocus.bind(this);
  }
  
  // 입력값 변경 대응
  handleInputChange(name, value) {
    console.log(name)
    if (!isNaN(value) && value < 0) {
      value = 0; // 음수일 시 0으로 값 대체(음수값 허용 x)
    }

    this.setState({
      [name]: value
    });
  }

  // focusing 변경 대응
  onFocus(inputName) {
    console.log(`input change => ${inputName}`);
  }

  // 유효성 검사 함수
  validatePrice(value) {
    return !isNaN(parseFloat(value)) && isFinite(value) && value >= 0;
  }

  render() {
    return (
      <div className='body'>
        <h2>상품 등록 Preview </h2>
        <b>제품명 : </b> {this.state.productName === '' ? '미정' : this.state.productName} <br/>
        <b>가격 : </b> {this.state.price === 0 ? 0 : this.state.price} 원 <br/>
        <b>상품 수량 : </b> {this.state.count === 0 ? 0 : this.state.count} 개 <br/>
        <b>제조사명 : </b> {this.state.makerName === '' ? '미정' : this.state.makerName} <br/>
        <b>구매 가능 연락처 : </b> {this.state.contact === '' ? '미정' : this.state.contact} <br/>

        <h2>상품 등록 폼</h2>
        <form>
          <Input 
            label="제품명 " 
            type='text'
            name='productName'
            value={this.state.productName} 
            onChange={this.handleInputChange}
            onFocus={() => this.onFocus('제품명')}
            errorMessage = {this.state.productName === '' ? ' 값을 입력해주십시오' : ''}
            /><br />
          <Input 
            label="가격 " 
            name='price'
            type='number'
            value={this.state.price}
            onChange={this.handleInputChange}
            onFocus={() => this.onFocus('가격')}
            errorMessage= {!this.validatePrice(this.state.price) ? " 양수값 이상으로 입력해주십시오." : ""}
            /><br />
          <Input 
            label="상품 수량 "
            name='count' 
            type='number'
            value={this.state.count}
            onChange={this.handleInputChange}
            onFocus={() => this.onFocus('상품 수량')}
            errorMessage= {!this.validatePrice(this.state.count) ? "양수값 이상으로 입력해주세요." : ""}
            /><br />
          <Input 
            label="제조사명 " 
            name='makerName'
            type='text'
            value={this.state.makerName}
            onChange={this.handleInputChange}
            onFocus={() => this.onFocus('제조사명')}
            errorMessage = {this.state.makerName === '' ? ' 값을 입력해주십시오' : ''}
            /><br />
          <Input 
            label="구매 가능 연락처 " 
            name='contact'
            type='text'
            value={this.state.contact}
            onChange={this.handleInputChange}
            onFocus={() => this.onFocus('구매 가능 연락처')}
            errorMessage = {this.state.contact === '' ? ' 값을 입력해주십시오' : ''}
            /><br />
            <br />
          <input type="submit" value="상품 등록" />
        </form>
      </div>
    );
  }
}

export default App;
