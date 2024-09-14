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
    <div className='p-4 bg-gray-100 w-full'>
      <button
        onClick={onBack}
        className='mb-4 text-blue-500 hover:text-blue-700'
      >
        &larr; 돌아가기
      </button>
      <h3 className='text-lg font-bold mb-2'>{news.title}</h3>
      <p className='text-sm mb-2'>ID: {news.id}</p>
      <p className='text-sm mb-2'>신문사: {news.name}</p>
      <p className='text-sm mb-2'>날짜: {formatDate(news.date)}</p>

      <div className='mb-4'>
        <label className='block font-semibold mb-1'>요약:</label>
        <textarea
          className='border p-2 w-full rounded'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <button
          onClick={() => handleUpdate('summary')}
          className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
        >
          수정
        </button>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-1'>키워드:</label>
        <input
          className='border p-2 w-full rounded'
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          onClick={() => handleUpdate('keyword')}
          className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
        >
          수정
        </button>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-1'>메모:</label>
        <input
          className='border p-2 w-full rounded'
          type='text'
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        <button
          onClick={() => handleUpdate('memo')}
          className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
        >
          수정
        </button>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-1'>마크:</label>
        <input
          className='border p-2 w-full rounded'
          type='text'
          value={mark}
          onChange={(e) => setMark(e.target.value)}
        />
        <button
          onClick={() => handleUpdate('mark')}
          className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
        >
          수정
        </button>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-1'>랭킹:</label>
        <input
          className='border p-2 w-full rounded'
          type='number'
          value={ranking}
          onChange={(e) => setRanking(e.target.value)}
        />
        <button
          onClick={() => handleUpdate('ranking')}
          className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
        >
          수정
        </button>
      </div>
    </div>
  );
}
