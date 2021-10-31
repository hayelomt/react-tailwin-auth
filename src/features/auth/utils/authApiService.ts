import axios from 'axios';
import { API_URL } from '../../../common/utils/constants';
import { User } from '../authSlice';

export const USER_KEY = 'user';

const setUser = (data: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

const getUser = () => JSON.parse(localStorage.getItem(USER_KEY) || '');

const clearUser = () => localStorage.removeItem(USER_KEY);

const isAuthenticated = () => !!getUser();

const getToken = () => {
  return getUser().accessToken;
};

const checkTokenApi = async (token: string) => {
  const response = await axios.post(
    `${API_URL}/auth/me`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return response.data as User;
};

const authService = {
  setUser,
  clearUser,
  isAuthenticated,
  getToken,
  checkTokenApi,
};

export default authService;
