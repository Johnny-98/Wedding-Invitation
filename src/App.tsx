import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { SiteHeader } from '@/components/SiteHeader';
import { WeddingCountdownFooter } from '@/components/WeddingCountdownFooter';

import { AppRoutes } from './routes';
import { theme } from './theme';

function App() {
  const location = useLocation();
  const showCountdownFooter = location.pathname !== '/rsvp';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell">
        <SiteHeader />
        <Box className="app-shell__main" component="main">
          <AppRoutes />
        </Box>
        {showCountdownFooter && <WeddingCountdownFooter />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
