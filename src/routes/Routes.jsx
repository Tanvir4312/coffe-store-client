
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import App from "../App";
import Singup from "../Pages/Singup";
import Singin from "../Pages/Singin";
import Users from "../Pages/Users";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <App></App>,
            loader: () => fetch('http://localhost:5000/coffees')
        },
        {
            path: '/addCoffee',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: '/updateCoffee/:id',
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
        },
        {
          path: '/singup',
          element: <Singup></Singup>
        },
        {
          path: 'singin',
          element: <Singin></Singin>
        },
        {
          path: '/users',
          element: <Users></Users>,
          loader: () => fetch('http://localhost:5000/users')
        }
      ]
    },
  ]);

  export default router