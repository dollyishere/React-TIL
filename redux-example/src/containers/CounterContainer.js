import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase } from './counter';
import { bindActionCreators } from 'redux';

/* 컨테이너 컴포넌트(Counter) */

/* 값 연동해서 Counter로 값 전달? */
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
  );
};

// // 따로 변수로 뺐을 때
// /* 리덕스 스토어 안의 상태를 컴포넌트 props로 넘겨주는 용 */
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// /* 액션 생성 함수를 컴포넌트 props로 넘겨주는 용 */
// const mapDispatchToProps = dispatch => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// // connect로 리덕스와 연동
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);

// 따로 변수로 빼지 않아도 아래처럼 선언해도 됨
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// // bindActionCreators 유틸 함수 사용
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => bindActionCreators({
//     increase,
//     decrease,
//   },
//   dispatch,
// ),
// )(CounterContainer);

// bindActionCreators 더 간결한 버전
export default connect(
  state  => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease
  },
)(CounterContainer);