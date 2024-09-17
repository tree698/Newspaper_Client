import React from 'react';

export default function NewsBox({
  article,
  onSelect,
  formattedDate,
  isSelected,
}) {
  return (
    <div
      onClick={() => onSelect(article)}
      className={`border border-gray-300 rounded p-4 mb-4 cursor-pointer transition-colors duration-200 ${
        isSelected ? 'bg-sky-300' : 'hover:bg-sky-100'
      }`}
    >
      <h4 className='font-bold text-lg'>{article.title}</h4>
      <p className='text-sm text-gray-600'>ID: {article.id}</p>
      <p className='text-sm'>신문사: {article.name}</p>
      <p className='text-sm'>날짜: {formattedDate}</p>
    </div>
  );
}
