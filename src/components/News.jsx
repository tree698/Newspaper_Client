import React from 'react';
import ShowNews from './ShowNews';
import DetailedNews from './DetailedNews';

export default function News({ newsData, onSelectNews, selectedNews, onBack }) {
  return (
    <div className='flex h-full relative'>
      <div className={`${selectedNews ? 'w-1/2' : 'w-full'}  h-full`}>
        <ShowNews newsData={newsData} onSelectNews={onSelectNews} />
      </div>
      {selectedNews && (
        <div className='w-1/2 h-full'>
          <div className='sticky top-40'>
            <DetailedNews news={selectedNews} onBack={onBack} />
          </div>
        </div>
      )}
    </div>
  );
}
