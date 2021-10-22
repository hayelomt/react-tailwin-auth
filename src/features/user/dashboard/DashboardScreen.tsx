import Layout from '../../../common/components/layout/Layout';
import AuthWrapper from '../../auth/components/AuthWrapper';

const DashboardScreen = () => {
  return (
    <>
      <AuthWrapper>
        <Layout>Dash Screen</Layout>
      </AuthWrapper>
    </>
  );
};

export default DashboardScreen;
