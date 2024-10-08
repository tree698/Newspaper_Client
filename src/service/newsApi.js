import { getRequest, postRequest, putRequest, deleteRequest } from './newsHttp';

export const fetchTodayNews = async () => {
  return await getRequest('/today');
};

export const searchByKeyword = async (keyword) => {
  return await getRequest(`/search?keyword=${keyword}`);
};

export const fetchArticleById = async (id) => {
  return await getRequest(`/${id}`);
};

export const fetchArticlesByNameAndDate = async (name, startDate, endDate) => {
  return await getRequest(
    `/searchByNameAndDate?name=${name}&startDate=${startDate}&endDate=${endDate}`
  );
};

export const fetchArticlesByLanguageAndDate = async (
  language,
  startDate,
  endDate
) => {
  return await getRequest(
    `/searchByLanguageAndDate?language=${language}&startDate=${startDate}&endDate=${endDate}`
  );
};

export const addNewArticle = async (articleData) => {
  return await postRequest('/', articleData);
};

export const updateArticleSummary = async (id, summary) => {
  return await putRequest(`/summary/${id}`, { summary });
};

export const updateArticleMemo = async (id, memo) => {
  return await putRequest(`/memo/${id}`, { memo });
};

export const updateArticleExpection = async (id, background) => {
  return await putRequest(`/background/${id}`, { background });
};

export const updateArticleClassification = async (id, classification) => {
  return await putRequest(`/classification/${id}`, { classification });
};

export const updateArticleKeyword = async (id, keyword) => {
  return await putRequest(`/keyword/${id}`, { keyword });
};

export const deleteArticlesByIds = async (ids) => {
  return await deleteRequest('/deleteArticles', { ids });
};

export const fetchArticleDetailsById = async (id) => {
  return await getRequest(`/articleDetails/${id}`);
};

export const executeQuery = async (query) => {
  return await postRequest('/executeQuery', { query });
};
