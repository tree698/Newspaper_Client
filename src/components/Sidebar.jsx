import React from 'react';

const today = new Date();

// 날짜 포맷팅 (YYYYMMDD 형식으로 변환)
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
const day = String(today.getDate()).padStart(2, '0');

// 'YYYYMMDD' 형식으로 날짜를 조합
const todayFormatted = `${year}${month}${day}`;

// 각 신문사 이름과 해당 웹사이트 주소를 매핑
const names = [
  { name: '조선', url: 'https://media.naver.com/press/023/newspaper' },
  { name: '중앙', url: 'https://media.naver.com/press/025/newspaper' },
  { name: '동아', url: 'https://media.naver.com/press/020/newspaper' },
  { name: '한국', url: 'https://media.naver.com/press/469/newspaper' },
  { name: '경향', url: 'https://media.naver.com/press/032/newspaper' },
  { name: '국민', url: 'https://media.naver.com/press/005/newspaper' },
  { name: '한경', url: 'https://media.naver.com/press/015/newspaper' },
  { name: '매경', url: 'https://media.naver.com/press/009/newspaper' },
  { name: '서울', url: 'https://media.naver.com/press/081/newspaper' },
  {
    name: 'nyt',
    url: 'https://www.nytimes.com/section/todayspaper?redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Finternational%2F',
  },
  { name: 'wp', url: 'https://www.washingtonpost.com/todays_paper/updates/' },
  { name: 'ft', url: 'https://www.ft.com/' },
  {
    name: 'wsj',
    url: `https://www.wsj.com/print-edition/${todayFormatted}/frontpage`,
  },
  {
    name: 'am',
    url: `https://www.asahi.com/shimen/${todayFormatted}/?iref=pc_gnavi`,
  },
  {
    name: 'an',
    url: `https://www.asahi.com/shimen/${todayFormatted}ev/?iref=pc_gnavi`,
  },
];

export default function Sidebar({ open, onToggle, newsData }) {
  return (
    <div className='h-full text-xs text-slate-600 transition-all duration-300 ease-in-out bg-white'>
      <div className='flex flex-col p-2 w-16'>
        {names.map(({ name, url }) => (
          <button
            key={name}
            className='mb-1 p-2 bg-slate-200 rounded hover:bg-slate-500 hover:text-slate-200 w-full'
            onClick={() => window.open(url, '_blank')}
          >
            {name}
          </button>
        ))}
      </div>
      <p className='w-full text-xs text-red-400 font-semibold text-center'>
        {newsData.toLocaleString()}개
      </p>
    </div>
  );
}
