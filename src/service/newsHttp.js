import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/news';

// Axios 인스턴스 생성 (공통 설정 가능)
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // 타임아웃 설정 (5초)
});

// 공통 GET 요청 함수
export const getRequest = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 공통 POST 요청 함수
export const postRequest = async (endpoint, payload) => {
  try {
    const response = await apiClient.post(endpoint, payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 공통 PUT 요청 함수
export const putRequest = async (endpoint, payload) => {
  try {
    const response = await apiClient.put(endpoint, payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 공통 DELETE 요청 함수
export const deleteRequest = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 에러 처리 함수
const handleError = (error) => {
  if (error.response) {
    // 서버가 응답했지만, 상태 코드가 2xx가 아닌 경우
    console.error('Response error:', error.response.data);
    throw new Error(error.response.data.message || 'An error occurred');
  } else if (error.request) {
    // 요청이 만들어졌으나 서버가 응답하지 않은 경우
    console.error('No response from server:', error.request);
    throw new Error('No response from server');
  } else {
    // 요청을 보내는 과정에서 에러가 발생한 경우
    console.error('Error setting up request:', error.message);
    throw new Error('Request setup error');
  }
};
