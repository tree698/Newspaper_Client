import React, { useState, useEffect } from 'react';
import {
  updateArticleSummary,
  updateArticleKeyword,
  updateArticleMemo,
  updateArticleClassification,
  updateArticleExpection,
  fetchArticleDetailsById,
} from '../service/newsApi';

export default function DetailedNews({ news, onBack }) {
  const [details, setDetails] = useState({
    summary: '',
    keyword: '',
    classification: '',
    background: '',
    memo: '',
  });

  useEffect(() => {
    if (news && news.id) {
      fetchArticleDetailsById(news.id)
        .then((data) => {
          setDetails({
            summary: data.summary || '',
            keyword: data.keyword || '',
            classification: data.classification || '',
            background: data.background || '',
            memo: data.memo || '',
          });
        })
        .catch((error) => {
          console.error('Error fetching article details:', error);
        });
    }
  }, [news]);

  const handleInputChange = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async (type) => {
    try {
      switch (type) {
        case 'summary':
          await updateArticleSummary(news.id, details.summary);
          break;
        case 'keyword':
          await updateArticleKeyword(news.id, details.keyword);
          break;
        case 'memo':
          await updateArticleMemo(news.id, details.memo);
          break;
        case 'classification':
          await updateArticleClassification(news.id, details.classification);
          break;
        case 'background':
          await updateArticleExpection(news.id, details.background);
          break;
        default:
          break;
      }
      alert('업데이트 완료');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className='py-4 p-4 w-full'>
      <button
        onClick={onBack}
        className='mb-4 text-blue-500 hover:text-blue-700'
      >
        &larr; 돌아가기
      </button>
      <h3 className='text-lg font-bold mb-2 truncate overflow-hidden whitespace-nowrap'>
        {news.title}
      </h3>

      <div className='mb-3'>
        <div className='flex items-center'>
          <label className='text-red-400 font-bold mr-2'>✓ 요약:</label>
          <button
            onClick={() => handleUpdate('summary')}
            className='bg-slate-100 text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <textarea
          className='border p-2 w-full rounded outline-none mt-1'
          value={details.summary}
          onChange={(e) => handleInputChange('summary', e.target.value)}
          rows={3}
        />
      </div>

      <div className='mb-3'>
        <div className='flex items-center'>
          <label className='text-red-400 font-bold mr-2'>✓ 키워드:</label>
          <button
            onClick={() => handleUpdate('keyword')}
            className='bg-slate-100 text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <input
          className='border p-2 w-full rounded outline-none mt-1'
          type='text'
          value={details.keyword}
          onChange={(e) => handleInputChange('keyword', e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <div className='flex items-center'>
          <label className='text-red-400 font-bold mr-2'>✓ 분류:</label>
          <button
            onClick={() => handleUpdate('classification')}
            className='bg-slate-100 text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <input
          className='border p-2 w-full rounded outline-none mt-1'
          type='text'
          value={details.classification}
          onChange={(e) => handleInputChange('classification', e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <div className='flex items-center'>
          <label className='text-red-400 font-bold mr-2'>✓ 배경:</label>
          <button
            onClick={() => handleUpdate('background')}
            className='bg-slate-100 text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <textarea
          className='border p-2 w-full rounded outline-none mt-1'
          value={details.background}
          onChange={(e) => handleInputChange('background', e.target.value)}
          rows={2}
        />
      </div>

      <div className='mb-3'>
        <div className='flex items-center'>
          <label className='text-red-400 font-bold mr-2'>✓ 메모:</label>
          <button
            onClick={() => handleUpdate('memo')}
            className='bg-slate-100 text-sm px-2 py-1 rounded hover:scale-105 hover:bg-red-200 transition-all duration-300 ease-in-out'
          >
            수정
          </button>
        </div>
        <input
          className='border p-2 w-full rounded outline-none mt-1'
          type='text'
          value={details.memo}
          onChange={(e) => handleInputChange('memo', e.target.value)}
        />
      </div>
    </div>
  );
}
