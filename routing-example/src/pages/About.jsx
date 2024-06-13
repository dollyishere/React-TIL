import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';

const About = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  // 토글(좋아요 등) 버튼 만들 때 주로 사용...?
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  }

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  }
  const navigate = useNavigate();
  const location = useLocation(); // 현재 보고 있는 페이지의 정보를 반환

  const goBack = () => {
    navigate(-1);  // 이전 페이지로 이동
  }

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <p>쿼리스트링: {location.search}</p>
      <button onClick={goBack}>
        뒤로가기
      </button>
    </div>
  );
}

export default About;