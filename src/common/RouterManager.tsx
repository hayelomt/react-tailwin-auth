import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../features/auth/login/Login';
import Register from '../features/auth/register/Register';
import Dash from '../features/test/Dash';
import Home from '../features/test/Home';
import Dashboard from '../features/user/dashboard/Dashboard';

const RouterManager = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dash" component={Dash} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterManager;
