import ReactDOM from 'react-dom/client';
import { App } from './App';

const placesQuantity = 10;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App placesQuantity={placesQuantity}/>
);
