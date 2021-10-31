import { CssBaseline } from '@mui/material';
import RouterManager from './app/RouterManager';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthWrapper from './features/auth/containers/AuthWrapper';

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthWrapper>
          <RouterManager />
        </AuthWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
