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

const router = createBrowserRouter(routes);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
