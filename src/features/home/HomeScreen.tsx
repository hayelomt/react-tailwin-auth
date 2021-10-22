import Layout from '../../common/components/layout/Layout';
import authService from '../auth/services/authService';

const HomeScreen = () => {
  return (
    <>
      <Layout>
        <p>Home Screen</p>
        <button onClick={authService.logOut}>Sign Out</button>
      </Layout>
    </>
  );
};

export default HomeScreen;
