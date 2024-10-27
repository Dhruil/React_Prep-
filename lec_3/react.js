import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() is a Object => When We render On Browser/root it Becomes the Element of HTML.
// and ot replce which was code written in the root id tag
const heading = React.createElement('h1',{id : "hello"} , "Hello World");//react code written in js

const root = ReactDOM.createRoot(document.getElementById("root"));
//jsx =>Javascript XML + html or XML like syntax 
// jsx(transpiled to js before it reaches to browser) - parcel - babel
//jsx is not supported by browser so we need to transpile it to js
//jsx =>React.createElement => React_object => HTMLElement_render
const head = <h1 id = "hello">Hello React</h1>;//react code written in jsx

//for multiple line we need to put code inside( --- ) this brackets;
const multipleline = (<p> lorem ipsum lorem ipsum lore lorem508 lorem3
     </p>);

console.log(heading);
//both give the same object in console;
console.log(head);


//react functional components;

const hello = () => <h1>hello </h1>;
const world = () =>{
    return <h1>world</h1>
};
const reactp = () =>(
    <h1>react</h1>
);
//components composition; -> component calling inside a functional component
const print = () =>{
    return <div>
        <div>
        {hello()}
        <world/>
        <react></react>
        </div>
    </div>;
};
root.render(print());
