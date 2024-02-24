import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/Home';
import AuthenticationPage from './pages/Authentication';

const routes = [
  {
    path: '/stare-misto-ui/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL ? '/' : '/stare-misto-ui/' });

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
