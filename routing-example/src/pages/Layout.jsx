import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    // 이전전 페이지 이동은 navigate(-2);
    navigate(-1);
  };

  // 직접 이동할 경로 설정
  const goArticles = () => {
    // articles 경로로 이동
    navigate('/articles', {replace : true});
  }

  return (
    <div>
      <header style={{background: 'lightgray', padding: 16, fontSize:24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;