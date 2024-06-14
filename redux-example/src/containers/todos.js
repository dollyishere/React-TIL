import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

/* todos 모듈 */

/* 1. 액션 타입 정의 */
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크 / 체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

/** 이전 버전 action 정의 */
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input
// });

// // 각 todo id 값
// let id = 3; // insert가 호출될 떄마다 1씩 더해짐
// // insert 될 때마다 초기값 세팅
// export const insert = text => ({
//   type: INSERT,
//   todo : {
//     id : id++,
//     text,
//     done: false
//   }
// });

// // 토글할 때마다 값 변화
// export const toggle = id => ({
//   type: TOGGLE,
//   id
// });

// // 해당 item 삭제
// export const remove = id => ({
//   type: REMOVE,
//   id
// })

/** createAction 사용 액션 정의 */
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해짐
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// 초기 데이터
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    }
  ]
}

// /* 리듀서 함수 정의 */
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo) // 해당 자원 추가
//       };
//       case TOGGLE:
//     return {
//       ...state,
//       todos: state.todos.map(todo => 
//         todo.id === action.id ? {...todo, done: !todo.done} : todo // 해당 자원 상태 값만 변화
//       )
//     };
//     case REMOVE:
//     return {
//       ...state,
//       todos: state.todos.filter(todo => todo.id !== action.id) // 해당 자원 제외하고 return
//     };
//     default:
//       return state;
//   }
// }

/** handleActions를 이용한 리듀서 함수 정의 */
// const todos = handleActions(
//   {
//     // 객체 비구조화 할당 문법으로 action 값의 payload 이름을 새로 설정해주면 action.payload가 정확히 어떤 값을 의미하는지 더 쉽게 파악 가능
//     // createAction으로 만든 액션 생성 함수는 파라미터로 받아 온 값을 객체 안에 넣을 때 원하는 이름이 아니라,
//     // action.payload라는 이름을 공통적으로 넣어줘야 함
//     [CHANGE_INPUT]: (state, { payload: input }) => ({...state, input}),
//     [INSERT]: (state, {payload : todo}) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, {payload: id}) => ({
//       ...state,
//       todos: state.todos.map(todo =>
//         todo.id === id ? {...todo, done:!todo.done } : todo,
//       ),
//     }),
//     [REMOVE]: (state, {payload: id}) => ({
//       ...state,
//       todos: state.todos.filter(todo => todo.id !== id),
//     }),
//   },
//   initialState,
// );

/** immer 사용 리듀스 함수 */
// 단, depth가 깊어지기에 완전 추천하지는 않음
const todos = handleActions(
  {
    // 객체 비구조화 할당 문법으로 action 값의 payload 이름을 새로 설정해주면 action.payload가 정확히 어떤 값을 의미하는지 더 쉽게 파악 가능
    // createAction으로 만든 액션 생성 함수는 파라미터로 받아 온 값을 객체 안에 넣을 때 원하는 이름이 아니라,
    // action.payload라는 이름을 공통적으로 넣어줘야 함
    [CHANGE_INPUT]: (state, { payload: input }) => 
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, {payload : todo}) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, {payload: id}) => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id ? {...todo, done:!todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, {payload: id}) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;