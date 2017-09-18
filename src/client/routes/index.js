// containers
import Home from '../containers/Home'
import About from '../containers/About'
import NotFound from '../containers/errors/NotFound'
import Users from '../containers/Users'
import UserDetail from '../containers/UserDetail'

// layouts
import RootLayout from '../layouts/Root'

// routes
export default [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        exact: true,
        component: About
      },
      // users page
      {
        path: '/users',
        exact: true,
        component: Users
      },
      {
        path: '/users/:username',
        exact: true,
        component: UserDetail
      },
      // default page (return 404)
      {
        path: '*',
        state: {fullscreen: true},
        exact: true,
        component: NotFound
      }
    ]
  }
]