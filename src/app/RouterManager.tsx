import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../features/auth/login/LoginScreen';
import HomeScreen from '../features/home/HomeScreen';
import DashboardScreen from '../features/user/dashboard/DashboardScreen';
import AuthWrapper from '../features/auth/containers/AuthWrapper';
import PrivateRoute from '../features/auth/containers/PrivateRoute';

const RouterManager = () => {
  return (
    <>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={HomeScreen} />
            <PrivateRoute exact path="/dash" component={DashboardScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </Router>
      </AuthWrapper>
    </>
  );
};

export default RouterManager;
