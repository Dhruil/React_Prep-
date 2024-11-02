import React from "react";
import ReactDOM from "react-dom/client";
import  {createBrowserRouter,RouteProvider,Outlet, RouterProvider,useRouteError, Link,useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout></AppLayout>,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />,
      },
      {
        path : "/about",
        element : <About />,
      },
      {
        path : "contactus",
        element : <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element : <RestaurantMenu />,
      },
    ],
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
