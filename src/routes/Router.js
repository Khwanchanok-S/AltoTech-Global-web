import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Createpage from '../pages/Createpage';
import Homepage from '../pages/Homepage';
const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Homepage />,
  },
  {
    path: '/create',
    index: true,
    element: <Createpage />,
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
