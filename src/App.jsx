import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Navbar from "./components/navbar/Navbar"

function App() {

  const Layout = () => {
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/",
          element: <Layout/>
        },
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
