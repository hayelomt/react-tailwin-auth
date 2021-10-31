import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authSelector, checkAuth } from '../authSlice';

type AuthWrapperArg = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperArg) => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(authSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(checkAuth());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;
