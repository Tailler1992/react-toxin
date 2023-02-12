import {Outlet} from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './scss/general.scss';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;
