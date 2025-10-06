import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { API_CONFIG, ERROR_MESSAGES } from "../constants";
import type { ApiResponse, AppError } from "../types";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    return response;
  },
  (error) => {
    const appError: AppError = {
      code: error.code || "UNKNOWN_ERROR",
      message: getErrorMessage(error),
      details: error.response?.data,
    };

    return Promise.reject(appError);
  }
);

function getErrorMessage(error: any): string {
  if (!error.response) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }

  const status = error.response.status;
  const data = error.response.data;

  switch (status) {
    case 400:
      return data?.message || ERROR_MESSAGES.INVALID_URL;
    case 404:
      return ERROR_MESSAGES.NOT_FOUND;
    case 409:
      return data?.message || ERROR_MESSAGES.ALIAS_EXISTS;
    case 500:
      return ERROR_MESSAGES.SERVER_ERROR;
    default:
      return data?.message || ERROR_MESSAGES.GENERIC;
  }
}

export async function apiRequest<T = any>(
  config: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await apiClient.request<ApiResponse<T>>(config);
    console.log(response.data);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data.message || ERROR_MESSAGES.GENERIC);
    }

    return response.data as T;
  } catch (error) {
    throw error;
  }
}

export default apiClient;
