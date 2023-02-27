import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Main from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';
import SearchRoom from '../pages/SearchRoom/SearchRoom';
import Room from "../pages/Room";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Main/>,
      },
      {
        path: 'search-room',
        element: <SearchRoom/>,
      },
      {
        path: 'room/:id',
        element: <Room/>,
      },
      {
        path: '*',
        element: <NotFound/>,
      },
    ],
  },
]);

export default router;