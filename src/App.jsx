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
  deleteArticlesByIds,
} from './service/newsApi';

export default function App() {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  useEffect(() => {
    loadTodayNews();
  }, []);

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
        case 'deleteArticles':
          await deleteArticlesByIds(params.ids);
          alert(`선택한 기사들이 삭제되었습니다.`);
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
    <div className='flex flex-col h-screen'>
      <div className='fixed top-0 left-0 right-0 z-10 bg-slate-100'>
        <Netbar onApiRequest={handleApiRequest} />
      </div>
      <div className='flex flex-1 pt-32'>
        <div className='w-16 flex-shrink-0'>
          <div className='fixed h-full'>
            <Sidebar
              open={sidebarOpen}
              onToggle={() => setSidebarOpen(!sidebarOpen)}
              newsData={newsData.length}
            />
          </div>
        </div>
        <div className='flex-1 h-100vh'>
          {loading && <p className='text-center'>로딩 중...</p>}
          <News
            newsData={newsData}
            onSelectNews={setSelectedNews}
            selectedNews={selectedNews}
            onBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
}
