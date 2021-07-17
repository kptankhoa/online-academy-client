import { lazy } from 'react';

const route = {
  path: '/search',
  name: 'Search',
  component: lazy(() => import('.'))
};

export default route;
