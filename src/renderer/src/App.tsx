import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/tanstack-query';
import './styles/global.css';
import { AppRoutes } from './Routes';


export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <AppRoutes />
      </div>
    </QueryClientProvider>
  )
}
