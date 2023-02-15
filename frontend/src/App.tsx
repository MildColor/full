import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Routers from './routers/Routers';
import theme from './styles/theme';
import Layout from './components/common/Layout/Layout';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routers />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
