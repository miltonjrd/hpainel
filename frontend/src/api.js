import useSWR from 'swr';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('authorization');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const api = axios;

export const useApi = (url, payload) => {
  const fetcher = async (url) => (await axios(url, payload)).data;
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    loading: !data && !error
  };
};