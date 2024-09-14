import React from 'react';
import NewsBox from './NewsBox';

export default function ShowNews({ newsData, onSelectNews }) {
  // 날짜를 연도-월-일 형식으로 변환하는 함수
  const formatDate = (dateString) => {
    return dateString.split('T')[0]; // 'YYYY-MM-DD'만 추출
  };

  return (
    <div className='flex flex-wrap gap-4 p-4'>
      {newsData.length === 0 ? (
        <p>해당 뉴스가 없습니다.</p>
      ) : (
        newsData.map((article) => (
          <NewsBox
            key={article.id}
            article={article}
            onSelect={onSelectNews}
            formattedDate={formatDate(article.date)}
          />
        ))
      )}
    </div>
  );
}
