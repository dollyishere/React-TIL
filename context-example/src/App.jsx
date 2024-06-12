import logo from './logo.svg';
import './App.css';
import MyComponent from './context/MyComponent';
import AuthContext from './context/AuthoContext';
import MyList from './array/MyList';
import MyTable from './array/MyTable';
import MyComponent2 from './context/MyComponent2';
import MyForm from './context/MyForm';
import MyList2 from './context/MyList2';

function App() {
  // 사용자 인증하고 사용자명 가져오기
  const userName = 'john';

  return (
    <AuthContext.Provider value={userName}>
      {/* <MyComponent/>
      <MyList />
      <MyTable />
      <br />
      <MyComponent2 />
      <br />
      <MyForm /> */}
      <MyList2 />
    </AuthContext.Provider>
  );
}

export default App;
