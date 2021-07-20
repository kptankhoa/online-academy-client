import { lazy } from 'react';
const route = {
  path: '/admin/managements/students',
  name: 'Student Management',
  component: lazy(() => import('.')),
};

export default route;
