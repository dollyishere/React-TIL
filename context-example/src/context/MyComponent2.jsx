import React from 'react';

function MyComponent2() {
  // 버튼 누를 시 호출
  const buttonPressed = () => {
    alert('Button pressed');
  }

  return (
    <div>
      <button onClick={buttonPressed}>Press Me</button>    
    </div>
  );
}

export default MyComponent2;