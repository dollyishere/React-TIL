import React, { Component } from 'react';

class ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => (<div>가격: {price}원</div>))
    const todoList = [
      {taskName: '빨래하기', finished: false },
      {taskName: '공부하기', finished: true}
    ]

    // 배열 컴포넌트에는 키 값을 key로 꼭 정의해줘야 함
    // 그런데 만약 배열의 일부를 filter 처리할 때 인덱스 번호를 키로 사용한다면 키 값이 함께 변경되는 문제가 발생
    // 이 경우 컴포넌트 재활용이 불가하여 새로 그려야 하기에 비효율적임
    // 따라서 키값으로 고유한 배열 항목(여기서는 taskName)을 키 값으로 이용
    const todos = todoList.map(todo => <div key={todo.taskName}>{todo.taskName} : {todo.finished ? '완료' : '미완'} </div>)
    return (
      <div>
        <label>가격 목록</label>
        {prices}
        <label>할일 목록</label>
        {todos}
      </div>
    );
  }
}

export default ListExample;