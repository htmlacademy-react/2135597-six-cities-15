import { BrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AppRouter } from './providers/router/AppRouter';

interface AppProps {
    placesQuantity: number;
}

export const App = (props: AppProps) => {
  const {placesQuantity} = props;

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
