import { CssBaseline, ThemeProvider } from '@mui/material';

import { SiteHeader } from '@/components/SiteHeader';

import { AppRoutes } from './routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteHeader />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
