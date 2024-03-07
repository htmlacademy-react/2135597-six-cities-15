import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router/AppRouter';


export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
