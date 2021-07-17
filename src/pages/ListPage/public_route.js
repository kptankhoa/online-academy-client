import { lazy } from 'react';

const route = {
  path: '/category/:categoryId',
  name: 'Home',
  component: lazy(() => import('.'))
};

export default route;
