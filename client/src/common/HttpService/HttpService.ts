import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from './HttpConstants';

export interface HttpSuccessResponse<T> {
  data: T;
  path: string;
  statusCode: number;
  timestamp: string;
}

// Define a common HTTP Service class
class HttpServiceBase {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // GET method
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(`${this.baseURL}${url}`, config);
    return response.data;
  }

  // POST method
  public async post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axios.post(`${this.baseURL}${url}`, data, config);
    return response.data;
  }

  // PUT method
  public async put<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axios.put(`${this.baseURL}${url}`, data, config);
    return response.data;
  }

  // DELETE method
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axios.delete(`${this.baseURL}${url}`, config);
    return response.data;
  }
}

const HttpService = new HttpServiceBase(BASE_URL);

export default HttpService;
