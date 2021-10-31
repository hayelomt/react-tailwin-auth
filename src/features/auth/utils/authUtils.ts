import { USER_KEY } from './authApiService';

export const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY) || '{}');

  return user && user.authToken
    ? { Authorization: `Bearer ${user.authToken}` }
    : {};
};
