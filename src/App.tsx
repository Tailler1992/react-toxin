import {Outlet} from 'react-router';
import {Header, Footer} from "./components/common";
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
