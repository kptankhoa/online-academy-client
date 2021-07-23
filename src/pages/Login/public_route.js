import { lazy } from 'react';
const route = {
  path: '/login/admin',
  name: 'Login Admin',
  component: lazy(() => import('.')),
};

export default route;
