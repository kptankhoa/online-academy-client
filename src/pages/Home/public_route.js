import { lazy } from 'react';

const route = {
  path: '/',
  name: 'Home',
  component: lazy(() => import('.'))
};

export default route;
