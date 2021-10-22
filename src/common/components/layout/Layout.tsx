import { Link } from 'react-router-dom';
import { ReactChildren } from '../../utils/types';

const Layout = ({ children }: ReactChildren) => {
  return (
    <>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/dash">Dash</Link>
        </span>
      </div>
      {children}
    </>
  );
};

export default Layout;
