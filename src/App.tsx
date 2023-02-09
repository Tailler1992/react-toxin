import {Outlet} from 'react-router';
import Header from './components/Header/Header';
import './scss/general.scss';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default App;
