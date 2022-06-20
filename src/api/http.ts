import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';

const options: object = {
  arrayFormat: 'bracket',
};

// set up default config for http requests
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  paramsSerializer: (params) => queryString.stringify(params, options),
});

http.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
