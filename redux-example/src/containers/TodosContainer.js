import { connect } from 'react-redux';
import { changeInput, insert, remove, toggle } from './todos';
import Todos from '../components/Todos';

/** redux 상태값 연결 container(todos) */
/* 데이터 todo component에 props로 넣어주기 */
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos 
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

/* 컴포넌트 redux와 연동 */
export default connect(
  // 비구조화 할당을 통해 todos를 분리하여
  // state.todos.input 대신 todos.input 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove
  },
)(TodosContainer);