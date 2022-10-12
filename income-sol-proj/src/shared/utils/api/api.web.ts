import axios, { AxiosRequestConfig } from 'axios';
import { ApiRequestInternal, ApiResponse, QueryParams, RequestBody, RequestMethod } from '@/shared/utils/api/types';

let token;
if (window.localStorage.getItem('vuex')) {
  token = JSON.parse(<any>window.localStorage.getItem('vuex')).UserStore.user.token;
} else {
  token = '';
}
const defaults = {
  baseURL: import.meta.env.VITE_WEB_API_BASE_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `BEARER ${token}`,
  },
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

const createRequestConfig = (method: RequestMethod, url: string, body?: RequestBody, queryParams?: QueryParams): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    url: `${defaults.baseURL}/${url}`,
    method,
    withCredentials: true,
    headers: defaults.headers,
    data: body,
    params: queryParams,
  };
  return config;
};

const webApi = async ({ method, url, body, queryParams }: ApiRequestInternal): ApiResponse => {
  try {
    const payload = createRequestConfig(method, url, body, queryParams);
    const res = await axios(payload);
    return res.data;
  } catch (error) {
    return error !== null ? error : defaults.error;
  }
};

export default webApi;
