import { lazy } from 'react'
const route = {
  path: '/courses/:courseId/lessons/:lessonId',
  name: 'Lesson',
  component: lazy(()=>import('.'))
}

export default route
