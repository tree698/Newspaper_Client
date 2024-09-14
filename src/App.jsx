import React, { useState, useEffect } from 'react';
import Netbar from './components/Netbar';
import News from './components/News';
import Sidebar from './components/Sidebar';
import {
  fetchTodayNews,
  fetchArticlesByNameAndDate,
  fetchArticlesByLanguageAndDate,
  searchByKeyword,
  fetchArticleById,
  deleteArticleById,
} from './service/newsApi';

export default function App() {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 오늘의 뉴스를 가져오는 함수
  const loadTodayNews = async () => {
    setLoading(true);
    try {
      const data = await fetchTodayNews();
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching today's news:", error);
    } finally {
      setLoading(false);
    }
  };

  // 처음 렌더링될 때 오늘의 뉴스를 자동으로 가져옴
  useEffect(() => {
    loadTodayNews();
  }, []);

  // API 요청을 처리하는 함수
  const handleApiRequest = async (type, params) => {
    setLoading(true);
    let data;
    try {
      switch (type) {
        case 'today':
          data = await fetchTodayNews();
          break;
        case 'nameAndDate':
          data = await fetchArticlesByNameAndDate(
            params.name,
            params.startDate,
            params.endDate
          );
          break;
        case 'languageAndDate':
          data = await fetchArticlesByLanguageAndDate(
            params.language,
            params.startDate,
            params.endDate
          );
          break;
        case 'keyword':
          data = await searchByKeyword(params.keyword);
          break;
        case 'id':
          data = await fetchArticleById(params.id);
          data = data ? [data] : [];
          break;
        case 'deleteById':
          await deleteArticleById(params.id);
          alert(`ID ${params.id}가 삭제되었습니다.`);
          data = await fetchTodayNews();
          break;
        default:
          data = [];
      }
      setNewsData(data);
    } catch (error) {
      console.error(`Error processing ${type} request:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setSelectedNews(null);
  };

  return (
    <div className='flex flex-row'>
      <div>
        <Sidebar
          open={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      <div className='w-full pl-24 border-2'>
        <Netbar onApiRequest={handleApiRequest} />
        {loading && <p>로딩 중...</p>}
        <News
          newsData={newsData}
          onSelectNews={setSelectedNews}
          selectedNews={selectedNews}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}
