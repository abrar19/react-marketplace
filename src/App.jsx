import React from "react"
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import Add from "./pages/add/Add.jsx";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";

function App() {

  const Layout = () => {
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        }
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
