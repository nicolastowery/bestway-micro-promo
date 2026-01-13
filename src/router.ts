import { createHashRouter } from 'react-router-dom';
import AppLayout from './layout/app-layout.comp';
import T100 from './pages/t100/t100.page';
import T50 from './pages/t50/t50.page';
import Mavic3m from './pages/mavic-3m/mavic-3m.page';

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <T100 />,
      },
      {
        path: 't50',
        element: <T50 />,
      },
      {
        index: 'mavic-3m',
        element: <Mavic3m />,
      },
    ],
  },
]);
