import { onAuthStateChanged } from '@firebase/auth';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { auth } from '../../../common/services/firebase';
import { logger } from '../../../common/utils/logger';
import { ReactChildren } from '../../../common/utils/types';
import { logoutUser, setAuthLoading, setUser } from '../authSlice';
import authService from '../services/authService';

const AuthWrapper = ({ children }: ReactChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    logger('Check Auth');
    dispatch(setAuthLoading(true));
    return onAuthStateChanged(auth, (user) => {
      logger('Auth changed', user ? user.uid : 'NO-Auth');
      if (user) {
        dispatch(setUser(authService.mapFirebaseUser(user)));
      } else {
        dispatch(logoutUser());
      }
      dispatch(setAuthLoading(false));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;
