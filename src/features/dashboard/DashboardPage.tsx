import { Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../app/hooks';
import { logoutUser } from '../auth/authSlice';

const DashboardPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    history.replace('/');
  };

  return (
    <>
      <Typography variant="h3">Dashboard Page</Typography>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default DashboardPage;
