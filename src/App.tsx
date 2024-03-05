import { Main } from './pages/Main/Main';

interface AppProps {
    placesQuantity: number;
}

export const App = (props: AppProps) => {
  const {placesQuantity} = props;

  return (
    <Main placesQuantity={placesQuantity}/>
  );
};
