import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouteProvider, Outlet, RouterProvider, useRouteError, Link, useParams } from "react-router-dom"
import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import useOnline from "./utils/useOnline";
import { Offline } from "./components/Offline";
import UserContext from "./utils/UserContext";


// AppLayout component to show: Header, Body, Footer

const About = lazy(() => import("./components/About"));
const AppLayout = () => {

  const [userName, setUserName] = useState("");




  let onlineStatus = useOnline();
  if (onlineStatus === false) return (<Offline />);
  else {
    return (
      <React.Fragment>
        <Header />
          <Outlet />
         <UserContext.Provider value={{ user: userName ,setUserName}}> <Footer /></UserContext.Provider>

      </React.Fragment>
    );
  }
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading</h1>}><About /></Suspense>,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
