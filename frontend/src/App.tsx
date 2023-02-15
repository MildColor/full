import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Routers from './routers/Routers';
import theme from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
