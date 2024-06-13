import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        {[1, 2, 3].map(index => {
          // return 내부에서 map 쓸 때는 반드시 return 써줘야 함
            return (
              <li key={index}>
              <ArticleItem id={index} />
            </li>
            );
          })}
      </ul>
    </div>
  )
};

// 별도 컴포넌트로 분리
const ArticleItem = ({ id }) => {
  // 스타일 코드 값이 아니라 객체임~
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
      <NavLink to={`/articles/${id}`}
        style={({isActive}) => (isActive ? activeStyle : undefined)}
      > 게시글 {id}</NavLink>
  );
}

export default Articles;