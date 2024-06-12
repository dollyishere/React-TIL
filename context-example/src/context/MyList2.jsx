import React, { useState } from 'react';

function MyList2() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  
  // 입력 상자의 내용이 변경되면 값을 저장
  const inputChanged = (event) => {
    setUser({...user,               // 현재 user 객체의 모든 속성을 복사
      [event.target.name] : event.target.value}) // 해당 속성만 새 값으로 업데이트
  }

  const handleSubmit = (event) => {
    alert(`Welcome, ${user.firstName} ${user.lastName}! \n your email is : ${user.email}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label><b>First name </b></label>
        <input type="text" name="firstName"
          onChange={inputChanged} value={user.firstName} /><br />
      <label><b>Last name </b></label>
        <input type="text" name="lastName"
          onChange={inputChanged} value={user.lastName} /><br />
      <label><b>Email </b></label>
        <input type="text" name="email"
          onChange={inputChanged} value={user.email} /><br />
      <input type="submit" value="Press me" />
    </form>
  );
}

export default MyList2;