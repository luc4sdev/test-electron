import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/tanstack-query';
import { AppRoutes } from './Routes';

import './styles/global.css';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}
