import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAppSelector } from '../../../app/hooks';
import { authSelector } from '../authSlice';

type PrivateRouteArg = {
  component: React.FC<any>;
  [key: string]: any;
};

const PrivateRoute = ({
  component: RouteComponent,
  ...rest
}: PrivateRouteArg) => {
  const { isAuthenticated } = useAppSelector(authSelector);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
