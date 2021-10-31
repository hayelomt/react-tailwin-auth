import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { API_URL } from '../utils/constants';
import { logError } from '../utils/logger';
import { ValidationError } from '../utils/types';

export type SendDataMethod = 'post' | 'patch';

type ValidationHandler = (err: ValidationError) => void;

type ErrorHandler = (err: string) => void;

type SuccessHandler = (data: any, status?: number) => void;

type CallApiArg = {
  data: any;
  method?: SendDataMethod;
  headers?: Record<string, any>;
  onValidationError?: ValidationHandler;
  onError?: ErrorHandler;
  onSuccess?: SuccessHandler;
};

export const useSendApiData = (endpoint: string) => {
  const [loading, setLoading] = useState(false);

  const callApi = async ({
    data,
    method = 'post',
    headers = {},
    onValidationError,
    onError,
    onSuccess,
  }: CallApiArg) => {
    setLoading(true);
    try {
      const response = await axios[method](`${API_URL}/${endpoint}`, data, {
        headers,
      });
      onSuccess?.call(this, response.data, response.status);
    } catch (err) {
      const apiErr = err as AxiosError;

      if (
        apiErr.response &&
        apiErr.response?.status === 400 &&
        onValidationError
      ) {
        onValidationError!(apiErr.response!.data as unknown as ValidationError);
      } else {
        onError?.call(
          this,
          apiErr.response?.data?.message ||
            apiErr.message ||
            'Unknown Error occurred'
        );
      }
      logError('Api Error', apiErr.message);
    }
    setLoading(false);
  };

  return { callApi, loading };
};
