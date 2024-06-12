import { useEffect, useState } from 'react';

function Counter() {
  // 초기 값이 0인 카운트 상태
  const [count, setCount] = useState(0);

  // 렌더링이 끝나면 매번 호출됨
  useEffect(() =>
    {  console.log("Hello from useEffect")    }, [count]
  )

  return (
    <div>
      <p>Counter = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;