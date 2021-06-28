import { lazy } from 'react'
const route = {
  path: '/home',
  name: 'Home',
  component: lazy(()=>import('.'))
}

export default route