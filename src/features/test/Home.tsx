import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../common/services/firebase';
import { logger } from '../../common/utils/logger';
import authService from '../auth/services/authService';

const Home = ({ children }: { children: any }) => {
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        logger('User auth');
      } else {
        logger('User unauth');
        history.push('/login');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return <Redirect to="/dash" />;

  return (
    <div style={{ height: '100%', background: 'crimson', color: 'white' }}>
      <button onClick={authService.signInAnon}>Sign In</button>
      <button onClick={authService.logOut}>Logout</button>
    </div>
  );
};

export default Home;
