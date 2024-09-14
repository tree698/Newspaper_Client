import React from 'react';
import ShowNews from './ShowNews';
import DetailedNews from './DetailedNews';

export default function News({ newsData, onSelectNews, selectedNews, onBack }) {
  return (
    <div className='flex'>
      <div>
        <ShowNews newsData={newsData} onSelectNews={onSelectNews} />
      </div>
      <div className={selectedNews ? 'block' : 'hidden'}>
        {selectedNews && <DetailedNews news={selectedNews} onBack={onBack} />}
      </div>
    </div>
  );
}
