import React, { useRef, useEffect, useCallback } from 'react';
import NewsBox from './NewsBox';

export default function ShowNews({ newsData, onSelectNews }) {
  const containerRef = useRef(null);
  const newsRefs = useRef({});

  const formatDate = (dateString) => {
    return dateString.split('T')[0]; // 'YYYY-MM-DD'만 추출
  };

  const handleSelectNews = (article) => {
    onSelectNews(article);
    if (newsRefs.current[article.id]) {
      newsRefs.current[article.id].scrollIntoView({
        behavior: 'smooth',
        block: 'center', // 요소를 화면 중앙에 위치
      });
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ref 할당을 useCallback으로 처리
  const setNewsRef = useCallback((el, id) => {
    if (el) {
      newsRefs.current[id] = el;
    }
  }, []);

  useEffect(() => {
    // 데이터가 처음 로드될 때 상단으로 스크롤
    if (newsData.length > 0) {
      scrollToTop();
    }
  }, [newsData]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col p-4 items-center gap-4 relative h-full overflow-y-auto'
    >
      {newsData.length === 0 ? (
        <p>해당 뉴스가 없습니다.</p>
      ) : (
        newsData.map((article) => (
          <div
            key={article.id}
            className='w-full max-w-3xl'
            ref={(el) => setNewsRef(el, article.id)} // ref 할당 처리
          >
            <NewsBox
              article={article}
              onSelect={() => handleSelectNews(article)}
              formattedDate={formatDate(article.date)}
            />
          </div>
        ))
      )}

      <button
        onClick={scrollToTop}
        className='fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        ↑
      </button>
    </div>
  );
}
