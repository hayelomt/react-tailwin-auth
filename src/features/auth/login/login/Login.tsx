import {
  useEffect,
  useState,
  //  useState
} from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../../services/authService';
import { useAppSelector } from '../../../../app/hooks';
import { authSelector } from '../../authSlice';
import { logger } from '../../../../common/utils/logger';
import Loading from '../../../../common/components/loading/Loading';
import './login.css';

function Login() {
  const history = useHistory();

  const [loggingIn, setLoggingIn] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { isAuthenticated, loading } = useAppSelector(authSelector);

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/');
    }
  }, [isAuthenticated, history]);
  logger('Login.tsx Is Auth ', isAuthenticated, loading);

  const handleAnon = async () => {
    setLoggingIn(true);
    await authService.signInAnon();
    setLoggingIn(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="login">
      <div className="login__container">
        {/* <input
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
        </button> */}
        <button disabled={loggingIn} onClick={handleAnon}>
          Login Anon
        </button>
        {/* <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div> */}
      </div>
    </div>
  );
}
export default Login;
