import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1',{id : "hello"} , "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

const head = () => {return <h1> hello</h1> };

root.render(<head></head>);