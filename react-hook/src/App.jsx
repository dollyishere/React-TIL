import './App.css';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import useTitle from './components/useTitle';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 사용자 설정 훅 사용
  useTitle(`You clicked ${count} times`);

  // useRef 사용 변수
  const inputRef = useRef(null);

  // 조건을 걸지 않는다면 렌더링이 끝나면 매번 호출됨
  useEffect(() =>
    {  console.log("Hello from useEffect");

      // 보조 작업 이전에 실행되는 함수 반환
      return () => {
        console.log('clean up function');
      }
        }, [count]
  )

  // react 18 이후부터는 모든 상태 일괄 처리가 가능함
  // 일괄 업데이트를 원하지 않을 때는 react-dom 라이브러리 flushSync api로 일괄처리를 피하는 것이 가능함
  const increment = () => {
    setCount(count + 1); // 아직 다시 렌더링 되지 않음
    flushSync(() => {
      setCount2(count2 + 1); // 일괄 업데이트 하지 않음
    })
    // 모든 상태 업데이트 된 후 컴포넌트 다시 렌더링
  }
  return (
    <div className="App">

      <p>Counter = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Counters : {count} {count2}</p>
      <button onClick={increment}>Increment</button>

      <div>
        <input ref={inputRef} />
        {/* 해당 버튼 클릭 시, 상단의 input 태그로 포커싱 이동 */}
        <button onClick={() => inputRef.current.focus()}> 
          Focus input
        </button>
      </div>
    </div>
  );
}

export default App;
