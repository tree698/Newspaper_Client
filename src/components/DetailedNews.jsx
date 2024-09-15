import React, { useState } from 'react';
import {
  updateArticleSummary,
  updateArticleKeyword,
  updateArticleMemo,
  updateArticleMark,
  updateArticleRanking,
} from '../service/newsApi';

export default function DetailedNews({ news, onBack }) {
  const [summary, setSummary] = useState(news.summary);
  const [keyword, setKeyword] = useState(news.keyword);
  const [memo, setMemo] = useState(news.memo);
  const [mark, setMark] = useState(news.mark);
  const [ranking, setRanking] = useState(news.ranking);

  const handleUpdate = async (type) => {
    try {
      switch (type) {
        case 'summary':
          await updateArticleSummary(news.id, summary);
          break;
        case 'keyword':
          await updateArticleKeyword(news.id, keyword);
          break;
        case 'memo':
          await updateArticleMemo(news.id, memo);
          break;
        case 'mark':
          await updateArticleMark(news.id, mark);
          break;
        case 'ranking':
          await updateArticleRanking(news.id, ranking);
          break;
        default:
          break;
      }
      alert('업데이트 완료');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  // 날짜를 연도-월-일 형식으로 변환하는 함수
  const formatDate = (dateString) => {
    return dateString.split('T')[0]; // 'YYYY-MM-DD'만 추출
  };

  return (
    <div className='py-4 pl-4 pr-16 w-full'>
      <button
        onClick={onBack}
        className='mb-4 text-blue-500 hover:text-blue-700'
      >
        &larr; 돌아가기
      </button>
      <h3 className='text-lg font-bold mb-2'>{news.title}</h3>
      <div className='mb-1'>
        <div className='flex items-center justify-between'>
          <label className='font-semibold'>요약:</label>
          <button
            onClick={() => handleUpdate('summary')}
            className='bg-orange-300 text-white text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-300 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <textarea
          className='border p-2 w-full rounded outline-none mt-1'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={3}
        />
      </div>

      <div className='mb-1'>
        <div className='flex items-center justify-between'>
          <label className='font-semibold'>키워드:</label>
          <button
            onClick={() => handleUpdate('keyword')}
            className='bg-orange-300 text-white text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-300 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <input
          className='border p-2 w-full rounded outline-none mt-1'
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <div className='mb-1'>
        <div className='flex items-center justify-between'>
          <label className='font-semibold'>마크:</label>
          <button
            onClick={() => handleUpdate('mark')}
            className='bg-orange-300 text-white text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-300 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <input
          className='border p-2 w-full rounded outline-none mt-1'
          type='text'
          value={mark}
          onChange={(e) => setMark(e.target.value)}
        />
      </div>

      <div className='mb-1'>
        <div className='flex items-center justify-between'>
          <label className='font-semibold'>랭킹:</label>
          <button
            onClick={() => handleUpdate('ranking')}
            className='bg-orange-300 text-white text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-300 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <input
          className='border p-2 w-full rounded outline-none mt-1'
          type='number'
          value={ranking}
          onChange={(e) => setRanking(e.target.value)}
        />
      </div>

      <div className='mb-1'>
        <div className='flex items-center justify-between'>
          <label className='font-semibold'>메모:</label>
          <button
            onClick={() => handleUpdate('memo')}
            className='bg-orange-300 text-white text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-300 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <textarea
          className='border p-2 w-full rounded outline-none mt-1'
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          rows={2}
        />
      </div>
    </div>
  );
}
