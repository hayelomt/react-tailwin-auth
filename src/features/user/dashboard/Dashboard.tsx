import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth } from '../../../common/services/firebase';
import authService from '../../auth/services/authService';
import './dashboard.css';

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const history = useHistory();

  const fetchUserName = async () => {
    setName('titan');
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace('/');
    fetchUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={authService.logOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
