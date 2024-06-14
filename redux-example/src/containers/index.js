import { combineReducers } from 'redux';
import counter from './counter'
import todos from './todos';

/* root 리듀서 파일 */
// 명명 index.js로 해두면 나중에 index.js 호출할 때 패키지명만 써도 자동 호출
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;