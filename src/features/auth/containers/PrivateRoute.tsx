import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAppSelector } from '../../../app/hooks';
import Loading from '../../../common/components/loading/Loading';
import { authSelector } from '../authSlice';

type PrivateRouteArg = {
  component: React.FC<any>;
  [key: string]: any;
};

const PrivateRoute = ({
  component: RouteComponent,
  ...rest
}: PrivateRouteArg) => {
  const { loading, isLoggedIn } = useAppSelector(authSelector);

  if (loading) return <Loading />;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
