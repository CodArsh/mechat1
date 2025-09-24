import axios, { type AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

// Request interceptor (optional, no token handling)
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response:AxiosResponse) => response.data, // return only data
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Maybe cookie expired.");
    }
    return Promise.reject(error);
  }
);

export type ApiResponse<T> = Promise<T>;

export default api;
