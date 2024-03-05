import { Main } from './pages/Main/Main';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

interface AppProps {
    placesQuantity: number;
}

export const App = (props: AppProps) => {
  const {placesQuantity} = props;

  return (
    <NotFoundPage />
  );
};
