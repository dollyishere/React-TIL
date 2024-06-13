import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  const onClick = async () => {
    // 임의 데이터 불러오기
    try {
      const response = await axios.get(
        // json 링크로 받아올 때 임의로 시도해보고 진짜를 넣어보기
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6a68a659d93c499bb7da78802b663f7b'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
    // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    //   setData(response.data);
    // });
  };

  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> } 
    //   </div>
    // </div>
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  );
};

export default App;
