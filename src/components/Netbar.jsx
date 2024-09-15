import React, { useState, useEffect } from 'react';

export default function Netbar({ onApiRequest }) {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [language, setLanguage] = useState('');
  const [keyword, setKeyword] = useState('');
  const [id, setId] = useState('');

  const handleApiCall = (type) => {
    if (type === 'deleteById') {
      if (!window.confirm('정말로 이 기사를 삭제하시겠습니까?')) {
        return;
      }
    }

    const params = { name, startDate, endDate, language, keyword, id };
    onApiRequest(type, params);
  };

  const handleKeyPress = (event, type) => {
    if (event.key === 'Enter') {
      handleApiCall(type);
    }
  };

  const handleClear = (setter) => {
    setter('');
  };

  useEffect(() => {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach((input) => {
      input.showPicker = function () {
        if (!this.value) {
          this.type = 'text';
          this.focus();
          this.type = 'date';
        }
      };
    });
  }, []);

  const renderInput = (value, setter, placeholder, type = 'text', onKeyUp) => (
    <div className='relative w-40'>
      <input
        className='border border-gray-300 bg-slate-100 px-4 py-2 rounded w-full outline-none pr-8'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setter(e.target.value)}
        onKeyUp={onKeyUp}
      />
      {value && (
        <button
          className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
          onClick={() => handleClear(setter)}
        >
          &#x2715;
        </button>
      )}
    </div>
  );

  return (
    <div className='w-full flex flex-col items-center my-8'>
      <div className='w-full flex justify-center mb-4 gap-2'>
        <button
          className='border border-gray-300 px-4 py-2 rounded bg-emerald-200 w-40 hover:bg-slate-200 transition-all duration-300 ease-in-out hover:scale-105'
          onClick={() => handleApiCall('today')}
        >
          오늘 뉴스
        </button>
        <button
          className='border border-gray-300 px-4 py-2 rounded bg-red-200 w-40 hover:bg-slate-200 transition-all duration-300 ease-in-out hover:scale-105'
          onClick={() => handleApiCall('deleteById')}
        >
          ID로 기사 삭제
        </button>
        <button
          className='border border-gray-300 px-4 py-2 rounded w-40 hover:bg-slate-200 transition-all duration-300 ease-in-out hover:scale-105'
          onClick={() => handleApiCall('id')}
        >
          ID로 기사 검색
        </button>
        <button
          className='border border-gray-300 px-4 py-2 rounded w-40 hover:bg-slate-200 transition-all duration-300 ease-in-out hover:scale-105'
          onClick={() => handleApiCall('keyword')}
        >
          검색어로 검색
        </button>
        <button
          className='border border-gray-300 px-4 py-2 rounded w-40 hover:bg-slate-200 transition-all duration-300 ease-in-out hover:scale-105'
          onClick={() => handleApiCall('nameAndDate')}
        >
          이름 및 날짜로 검색
        </button>
        <button
          className='border border-gray-300 px-4 py-2 rounded w-40 hover:bg-slate-200 transition-all duration-300 ease-in-out hover:scale-105'
          onClick={() => handleApiCall('languageAndDate')}
        >
          언어 및 날짜로 검색
        </button>
      </div>
      <div className='w-full flex justify-center gap-2'>
        {renderInput(startDate, setStartDate, '시작 날짜', 'date', (e) =>
          handleKeyPress(e, 'nameAndDate')
        )}
        {renderInput(endDate, setEndDate, '끝 날짜', 'date', (e) =>
          handleKeyPress(e, 'nameAndDate')
        )}
        {renderInput(id, setId, 'ID 입력..', 'text', (e) =>
          handleKeyPress(e, 'id')
        )}
        {renderInput(keyword, setKeyword, '검색어 입력..', 'text', (e) =>
          handleKeyPress(e, 'keyword')
        )}
        {renderInput(name, setName, '이름 입력..', 'text', (e) =>
          handleKeyPress(e, 'nameAndDate')
        )}
        {renderInput(language, setLanguage, '언어 입력..', 'text', (e) =>
          handleKeyPress(e, 'languageAndDate')
        )}
      </div>
    </div>
  );
}
