import { useEffect, useState } from 'react';
import Loading from '../../../common/components/loading/Loading';
import { ReactChildren } from '../../../common/utils/types';

const AuthWrapper = ({ children }: ReactChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    console.log('check auth');

    setTimeout(() => {
      setAuth(true);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) return <Loading />;

  return <>{auth ? children : <div>Redirect</div>}</>;
};

export default AuthWrapper;
