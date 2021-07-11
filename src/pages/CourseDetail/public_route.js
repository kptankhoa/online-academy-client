import { lazy } from 'react'
const route = {
  path: '/courses/:courseId',
  name: 'Course Detail',
  component: lazy(()=>import('.'))
}

export default route
