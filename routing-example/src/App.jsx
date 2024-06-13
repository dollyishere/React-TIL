import {Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';


function App() {
  return (
      <Routes>
        {/* 공통 레이아웃 컴포넌트 처리 */}
        <Route element={<Layout />}>
          {/* path 대신 index로 명시하면 경로가 주어지지 않았을 때 보여지는 라우트를 설정하는 것이 가능함 */}
          <Route index element={<Home />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/profiles/:username' element={<Profile />} />
        </Route>
        {/* 중첩 라우팅 처리 */}
        <Route path='/articles' element={<Articles />}>
            <Route path=':id' element={<Article />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default App;
