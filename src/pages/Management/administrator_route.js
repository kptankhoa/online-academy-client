import { lazy } from 'react';
const route = {
  path: '/admin/managements',
  name: 'Student Management',
  component: lazy(() => import('.')),
};

export default route;
