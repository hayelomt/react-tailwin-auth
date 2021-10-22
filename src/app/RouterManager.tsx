import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../features/auth/login/LoginScreen';
import Register from '../features/auth/register/Register';
import Dashboard from '../features/user/dashboard/Dashboard';
import HomeScreen from '../features/home/HomeScreen';
import DashboardScreen from '../features/user/dashboard/DashboardScreen';

const RouterManager = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/dash" component={DashboardScreen} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterManager;
