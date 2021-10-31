import { CssBaseline } from '@mui/material';
import RouterManager from './app/RouterManager';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterManager />
      </ThemeProvider>
    </>
  );
}

export default App;
