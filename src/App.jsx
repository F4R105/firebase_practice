import { createBrowserRouter, RouterProvider } from "react-router-dom"

// PAGES
import Login from "./pages/Login"
import Register from "./pages/Register"
import Account from "./pages/Account"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/account',
    element: <Account />
  }, {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
