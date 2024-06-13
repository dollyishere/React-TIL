import styled from 'styled-components';
import NewsItem from './NewsItemBlock';
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewListBolck = styled.div`
  box-sizing: border-box;
  padding-bottom:3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width:768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title : '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({category}) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // 기존 데이터 불러오는 코드
  // useEffect(() => {
  //   // async를 사용하는 함수 따로 선언
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         // json 링크로 받아올 때 임의로 시도해보고 진짜를 넣어보기
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6a68a659d93c499bb7da78802b663f7b`
  //       );
  //       setArticles(response.data.articles);
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [category]);

  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6a68a659d93c499bb7da78802b663f7b`
    );
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewListBolck>대기 중 ...</NewListBolck>
  }
  // 아직 response 값이 생성되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewListBolck>에러 발생!</NewListBolck>;
  }

  // articles 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewListBolck>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewListBolck>
  );
};

export default NewsList;