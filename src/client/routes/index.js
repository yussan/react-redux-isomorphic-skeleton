// containers
import Home from '../containers/home'
import About from '../containers/about'
import NotFound from '../containers/errors/NotFound'
import Users from '../containers/user'
import UserProfile from '../containers/user/Profile'

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
        component: UserProfile
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