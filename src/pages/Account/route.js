// eslint-disable-next-line object-curly-spacing
import { lazy } from 'react';

export default {
  path: '/account',
  exact: true,
  public: true,
  component: lazy(() => import('.'))
};
