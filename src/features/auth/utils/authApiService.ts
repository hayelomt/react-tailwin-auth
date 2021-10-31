import { User } from '../authSlice';

export const USER_KEY = 'user';

const setUser = (data: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

const clearUser = () => localStorage.removeItem(USER_KEY);

const authService = { setUser, clearUser };

export default authService;
