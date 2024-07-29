'use server';

import axios, { AxiosError } from 'axios';
import {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  ConflictError,
  TooManyRequestsError,
  BadGatewayError,
  InternalServerError
} from '@/api/error-types';

/**
 * Interface for error response data
 */
interface ErrorResponseData {
  error: string;
}

/**
 * Create an axios api with predefined configurations
 */
const api = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 10_000,
  withCredentials: true
});

/**
 * Handle axios response errors
 * @param {AxiosError<ErrorResponseData>} error - The axios error
 * @returns {Promise<never>} - Throws a specific error based on the status code
 */
const handleError = (error: AxiosError<ErrorResponseData>): Promise<never> => {
  if (error.response) {
    const { status, data } = error.response;
    const errorMessage = data?.error;

    switch (status) {
      case 400:
        throw new BadRequestError(errorMessage);
      case 401:
        throw new UnauthorizedError(errorMessage);
      case 404:
        throw new NotFoundError(errorMessage);
      case 409:
        throw new ConflictError(errorMessage);
      case 429:
        throw new TooManyRequestsError(errorMessage);
      case 502:
        throw new BadGatewayError(errorMessage);
      case 500:
        throw new InternalServerError(errorMessage);
      default:
        throw new Error(errorMessage || 'An unknown error occurred');
    }
  }

  throw error;
};

/**
 * Set up an interceptor to handle errors for the axios api
 */
api.interceptors.response.use(
  (response) => response,
  (error) => handleError(error)
);

export default api;
