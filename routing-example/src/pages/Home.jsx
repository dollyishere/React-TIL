import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const profiles = [
    {
      name: 'gildong',
      info: '길동의 프로필'
    },
    {
      name: 'velopert',
      info: 'velopert의 프로필'
    },
    {
      name: 'notfound',
      info: '존재하지 않는 프로필입니다.'
    }
  ]

  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to='/about'>소개</Link>
        </li>
          {profiles.map((profile) => (
            <li key={profile.name}>
              <Link to={`/profiles/${profile.name}`}>{profile.info}</Link>
            </li>
          ))}
        <li>
          <Link to='/articles'>게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;