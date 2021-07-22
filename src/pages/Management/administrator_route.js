import { lazy } from 'react';
const route = {
  path: '/admin/managements',
  name: 'Management',
  component: lazy(() => import('.')),
};

export default route;
