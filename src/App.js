import "./commonClassStyle.css"
import "./components/header/Header.css"
import "./components/home/Home.css"
import "./components/home/filter/filter.css"
import "./components/home/filter/filterItem.css"
import "./components/home/delivery/delivery.css"


import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Delivery from "./components/home/delivery/Delivery"
import DiningOut from "./components/home/DiningOut"
import Nightlife from "./components/home/Nightlife"

import { RouterProvider, createBrowserRouter } from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [{

        path: "/",
        element: <Home />,
        children: [{

          path: "/delivery",
          element: <Delivery />

        }, {

          path: "/diningout",
          element: <DiningOut />

        }, {

          path: "/nightlife",
          element: <Nightlife />

        }]
      },{
        path:"/food",
        element: <div>hi </div>

      }]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App