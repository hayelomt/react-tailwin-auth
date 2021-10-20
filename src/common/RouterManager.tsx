import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../features/auth/login/Login';
import Register from '../features/auth/register/Register';
import Dashboard from '../features/user/dashboard/Dashboard';

const RouterManager = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterManager;
