import React from "react";
import ReactDOM from "react-dom/client";
import UserClass from "./UserClass";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { lazy,Suspense } from "react";
const Grocery = lazy(()=>import("./Grocery"));
const App = () => {
  return (
    <>
      <UserClass />
    </>
  );
};

const routes = createBrowserRouter([{ path:"/",element:<App/>},{ path:"/Grocery",
    element:<Suspense><Grocery/></Suspense>  ,
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}/>)