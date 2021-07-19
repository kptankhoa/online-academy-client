import { lazy } from 'react';
const route = {
  path: '/managements/students',
  name: 'Student Management',
  component: lazy(() => import('.')),
};

export default route;
