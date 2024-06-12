import React from 'react';

// 이와 같은 배열형 컴포넌트를 만들 때는 반드시 키 값을 만들어야 함
// 키 값은 반드시 유일 값이어야 함
function MyList() {
  const data = [1, 2, 3, 4, 5];

  return (
    <div>
      <ul>
      {
        data.map((number, index) =>
          <li key={index}>Listitem {number}</li>
        )
      } 
      </ul>    
    </div>
  );
}

export default MyList;