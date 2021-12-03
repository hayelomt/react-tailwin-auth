// import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { authSelector } from '../auth/authSlice';

const HomePage = () => {
  const { isLoggedIn } = useAppSelector(authSelector);

  return (
    <>
      <div className="bg-blue-500">Home Page</div>
      <Link to="/login">Login</Link> <Link to="/register">Register</Link>{' '}
      {isLoggedIn && <Link to="/dashboard">DashBoard</Link>}
    </>
  );
};

export default HomePage;
