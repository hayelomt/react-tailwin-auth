import Layout from '../../common/components/layout/Layout';
import AuthWrapper from '../auth/components/AuthWrapper';

const HomeScreen = () => {
  return (
    <>
      <AuthWrapper>
        <Layout>Home Screen</Layout>
      </AuthWrapper>
    </>
  );
};

export default HomeScreen;
