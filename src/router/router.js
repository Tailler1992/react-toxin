import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {Main, NotFound, Registration, Room, SearchRoom, SignIn} from '../pages';

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
        path: 'sign-in',
        element: <SignIn/>,
      },
      {
        path: 'registration',
        element: <Registration/>,
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