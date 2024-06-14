import { createAction, handleActions } from 'redux-actions';

// 액션 타입 지정
// 타입명 자유, 구분 가능하기만 하면 됨
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// // 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// redux-actions를 사용한 action 함수 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 리듀서 함수 작성
const initalState = {
  number : 0
};

// 이전 버전 카운터
// function counter(state = initalState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number : state.number + 1
//       }
//     case DECREASE:
//       return {
//         number : state.number - 1
//       }
//     default:
//       return state;
//   }
// }

// handleActions 적용 counter
// 각 액션에 대한 업데이트 함수가 첫 파라미터, 초기 상태가 두번째 파라미터
// 액션 내부 depth는 가급적이면 2depth로 끝내자
const counter = handleActions(
  { 
    [INCREASE]: (state, action) => ({ number: state.number + 1}),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initalState,
)

export default counter;