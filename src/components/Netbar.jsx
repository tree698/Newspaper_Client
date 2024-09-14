import React, { useState } from 'react';

export default function Netbar({ onApiRequest }) {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [language, setLanguage] = useState('');
  const [keyword, setKeyword] = useState('');
  const [id, setId] = useState('');

  const handleApiCall = (type) => {
    const params = { name, startDate, endDate, language, keyword, id };
    onApiRequest(type, params);
  };

  return (
    <div>
      <button onClick={() => handleApiCall('today')}>오늘 뉴스</button>
      <div>
        <input
          type='text'
          placeholder='신문사 이름'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='date'
          placeholder='시작 날짜'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type='date'
          placeholder='끝 날짜'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={() => handleApiCall('nameAndDate')}>
          이름 및 날짜로 검색
        </button>
      </div>
      <div>
        <input
          type='text'
          placeholder='언어'
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button onClick={() => handleApiCall('languageAndDate')}>
          언어 및 날짜로 검색
        </button>
      </div>
      <div>
        <input
          type='text'
          placeholder='검색어'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={() => handleApiCall('keyword')}>검색어로 검색</button>
      </div>
      <div>
        <input
          type='text'
          placeholder='기사 ID'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={() => handleApiCall('id')}>ID로 기사 검색</button>
        <button onClick={() => handleApiCall('deleteById')}>
          ID로 기사 삭제
        </button>
      </div>
    </div>
  );
}
