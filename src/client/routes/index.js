import Loadable from "react-loadable"

// containers
import Home from "../containers/home"
import About from "../containers/about"
import NotFound from "../containers/errors/NotFound"
import UserProfile from "../containers/user/Profile"

// async containers - to create new chunk file
const Users = Loadable({
  loader: () => import("../containers/user"),
  loading: Loading
})

// layouts
import RootLayout from "../layouts/Root"

// components
import Loading from "../components/Loading"

// routes
export default [
  {
    component: RootLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/about",
        exact: true,
        component: About
      },
      // users page
      {
        path: "/users",
        exact: true,
        component: Users
      },
      {
        path: "/users/:username",
        exact: true,
        component: UserProfile
      },
      // default page (return 404)
      {
        path: "*",
        state: { fullscreen: true },
        exact: true,
        component: NotFound
      }
    ]
  }
]
