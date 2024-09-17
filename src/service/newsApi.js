import { getRequest, postRequest, putRequest, deleteRequest } from './newsHttp';

// 오늘 날짜의 모든 기사를 가져오는 함수
export const fetchTodayNews = async () => {
  return await getRequest('/today');
};

// 검색어로 제목을 검색하는 함수
export const searchByKeyword = async (keyword) => {
  return await getRequest(`/search?keyword=${keyword}`);
};

// 특정 ID로 기사를 가져오는 함수
export const fetchArticleById = async (id) => {
  return await getRequest(`/${id}`);
};

// name과 날짜 범위로 기사를 가져오는 함수
export const fetchArticlesByNameAndDate = async (name, startDate, endDate) => {
  return await getRequest(
    `/searchByNameAndDate?name=${name}&startDate=${startDate}&endDate=${endDate}`
  );
};

// language와 날짜 범위로 기사를 가져오는 함수
export const fetchArticlesByLanguageAndDate = async (
  language,
  startDate,
  endDate
) => {
  return await getRequest(
    `/searchByLanguageAndDate?language=${language}&startDate=${startDate}&endDate=${endDate}`
  );
};

// 새로운 기사를 추가하는 함수
export const addNewArticle = async (articleData) => {
  return await postRequest('/', articleData);
};

// 기사의 summary를 수정하는 함수
export const updateArticleSummary = async (id, summary) => {
  return await putRequest(`/summary/${id}`, { summary });
};

// 기사의 memo를 수정하는 함수
export const updateArticleMemo = async (id, memo) => {
  return await putRequest(`/memo/${id}`, { memo });
};

// 기사의 background를 수정하는 함수
export const updateArticleExpection = async (id, background) => {
  return await putRequest(`/background/${id}`, { background });
};

// 기사의 classification를 수정하는 함수
export const updateArticleClassification = async (id, classification) => {
  return await putRequest(`/classification/${id}`, { classification });
};

// 기사의 keyword를 수정하는 함수 (추가됨)
export const updateArticleKeyword = async (id, keyword) => {
  return await putRequest(`/keyword/${id}`, { keyword });
};

// 기사를 삭제하는 함수 (id로 삭제)
export const deleteArticleById = async (id) => {
  return await deleteRequest(`/${id}`);
};

// Fetch detailed data for a specific article by its ID
export const fetchArticleDetailsById = async (id) => {
  return await getRequest(`/articleDetails/${id}`); // Assuming your API uses this endpoint
};
