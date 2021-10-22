import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.css';
import authService from '../../services/authService';
import { logger } from '../../../../common/utils/logger';
import { auth } from '../../../../common/services/firebase';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    logger(`User`, user);
    if (user) history.replace('/dashboard');
  }, [user, loading, history]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => authService.signInEmailPassword(email, password)}
        >
          Login
        </button>
        <button
          className="login__btn login__google"
          onClick={authService.signInGoogle}
        >
          Login with Google
        </button>
        <button
          className="login__btn login__google"
          onClick={authService.signInAnon}
        >
          Login Anon
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
