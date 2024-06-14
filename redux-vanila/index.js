import { createStore } from "redux";

// DOM 레퍼런스 생성
// 이번에는 바닐라 자바스크립트이므로, DOM을 직접 수정해줘야 함
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션에 이름 정의
// 액션 이름은 문자열 형태로, 주로 대문자로 작성하며, 고유해야 함
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 정의
// 초깃값의 형태(타입)는 자유임
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 정의
// 함수의 파라미터로는 state와 action 값을 받아옴
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        // 객체 구조 복잡해질 시 spread 연산자 사용할 시 업데이트가 번거로울 수 있고, 가독성도 나빠짐
        // 따라서 리덕스 상태는 최대한 깊지 않은 구조로 진행하는 것을 추천
        ...state,  // 불변성 유지(spread 연산자)
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,  // 불변성 유지
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,  // 불변성 유지
        counter: state.counter - 1
      };
    default:
      return state;
  }
}


// 스토어 생성
// createStore는 앞으로 사라질 함수임
const store = createStore(reducer);

// render 함수 제작
// 상태 업데이트될 때마다 호출
// 이미 html을 사용하여 만들어진 ui 속성을 상태에 따라 변경해줌
const render = () => {
  const state = store.getState(); //  현재 상태를 불러옴
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
}

render(); // 화면에 값 보여줌
store.subscribe(render); // 상태 업데이트될 때마다 render 함수 호출

// 구독하기
// 스토어 상태 변경될 때마다 render() 함수 호출
// subscribe 함수 파라미터로는 함수 형태의 값을 전달함
// 추후 액션이 발생해 상태 업데이트될 때마다 호출
const listener = () => {
  console.log('상태가 업데이트됨');
}
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독 비활성화 시 해당 함수 호출

// 액션 발생시키기
// 액션을 발생시키는 건 스토어 내장 함수 dispatch임
// 파라미터는 액션 객체를 넣어주면 됨
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};