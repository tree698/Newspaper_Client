import React from 'react';

export default function NewsBox({ article, onSelect, formattedDate }) {
  return (
    <div
      onClick={() => onSelect(article)}
      className='w-80 border border-gray-300 rounded p-4 mb-4 cursor-pointer hover:bg-gray-100'
    >
      <h4 className='font-bold text-lg'>{article.title}</h4>
      <p className='text-sm text-gray-600'>ID: {article.id}</p>
      <p className='text-sm'>신문사: {article.name}</p>
      <p className='text-sm'>날짜: {formattedDate}</p>
    </div>
  );
}
