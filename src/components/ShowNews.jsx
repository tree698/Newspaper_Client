import React, { useRef, useEffect, useCallback, useState } from 'react';
import NewsBox from './NewsBox';
import { FaArrowUp } from 'react-icons/fa';

export default function ShowNews({ newsData, onSelectNews }) {
  const containerRef = useRef(null);
  const newsRefs = useRef({});
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const formatDate = (dateString) => {
    return dateString.split('T')[0]; // 'YYYY-MM-DD'만 추출
  };

  const handleSelectNews = (article) => {
    onSelectNews(article);
    setSelectedArticleId(article.id);
    if (newsRefs.current[article.id]) {
      newsRefs.current[article.id].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const scrollToTop = useCallback(() => {
    if (containerRef.current && newsData.length > 0) {
      const firstNewsId = newsData[0].id;
      if (newsRefs.current[firstNewsId]) {
        newsRefs.current[firstNewsId].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [newsData]);

  const setNewsRef = useCallback((el, id) => {
    if (el) {
      newsRefs.current[id] = el;
    }
  }, []);

  useEffect(() => {
    if (newsData.length > 0) {
      scrollToTop();
    }
  }, [newsData, scrollToTop]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center gap-4 p-4 relative h-full overflow-y-auto'
    >
      {newsData.length === 0 ? (
        <p>해당 뉴스가 없습니다.</p>
      ) : (
        newsData.map((article) => (
          <div
            key={article.id}
            className='w-full max-w-3xl'
            ref={(el) => setNewsRef(el, article.id)}
          >
            <NewsBox
              article={article}
              onSelect={() => handleSelectNews(article)}
              formattedDate={formatDate(article.date)}
              isSelected={selectedArticleId === article.id}
            />
          </div>
        ))
      )}
      <button
        onClick={scrollToTop}
        className='fixed bottom-6 left-8 bg-green-700 hover:bg-green-400 text-white font-bold p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105'
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
