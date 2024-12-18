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
import { Provider } from "react-redux"
import appstore from "./redux/appstore";
import Cart from "./components/cart";
// AppLayout component to show: Header, Body, Footer

const About = lazy(() => import("./components/About"));
const AppLayout = () => {

  const [userName, setUserName] = useState("");




  let onlineStatus = useOnline();
  if (onlineStatus === false) return (<Offline />);
  else {
    return (
      <React.Fragment>
        <Provider store={appstore}>
          {/* name of this.props is predefine .. wrapp component get those store data */}
        <Header />
        <Outlet />
        <UserContext.Provider value={{ user: userName, setUserName }}> <Footer /></UserContext.Provider>
      </Provider>
      </React.Fragment >
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
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
