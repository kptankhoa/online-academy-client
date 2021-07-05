import { lazy } from 'react'
const route = {
  path: '/login',
  name: 'Login Page',
  component: lazy(()=>import('.'))
}

export default route