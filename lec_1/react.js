 // use React for creating element and  insert values in react HTML tags
 const heading = React.createElement('h1',{id : "hello"} , "Hello World");
 // use react-dom for rendering react element in browser ans make root element to render element in root
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

 console.log(heading);// it is a object 
 //we can show the react object which hase props inside the id and childen has data of h1 tag


 <div id= "parent">
    <div id= "child">
        <h1>Hello World</h1>
    </div>
 </div>

// for creating above structure we using this type approah in html ja of react code is messy hence we use react jsx for easyness

const parent = React.createElement("div" , { id : "parent"},
    React.createElement("div",{id : "child"},
        React.createElement("h1" , {} , "Hello World 3")
    )
);
root.render(parent);


// if we need to make sibling elements

//  <div id= "parent">
//     <div id= "child">
//         <h1>Hello World</h1>
//            <h1>Hello World</h1>
//     </div>
//  </div>

// we need to make array of h1 tag fot making sibling in thi react use this array to make siblings in react

const parent = React.createElement("div" , { id : "parent"},
    React.createElement("div",{id : "child"},
        [React.createElement("h1" , {} , "Hello World 3"), React.createElement("h1",{},"Hello World 4")]
    )
);
root.render(parent);

// render will replaced the which id is passsed in to make this root , if we passed the id == root hence in html all tags of this div is replace by this render method ,
// but not  affecting the other tags which has deffernt id,
// or above or below tags are shows as in html we mentioned but which is we passed in root are replec by the parent tags