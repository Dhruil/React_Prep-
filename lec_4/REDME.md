# In This Lec Creating a Food App : 

- Build a `Food Ordering App`
    - Think of a `cool name` for your app
    - Build an `AppLayout`
    - Build a `Header Component` with Logo & Nav Items & Cart
    - Build a `Body Component`
        - Build `RestaurantList Component`
        - Build `RestaurantCard Component`
            - Use `static data initially`
            - Make your `card dynamic`(pass in props)
                - `Props` - passing arguments to a function - Use Destructuring & Spread operator
            - `Render` your cards with dynamic data of restaurants
            - Use `Array.map` to render all the restaurants

## What is props in react ?

In **React**, **props** (short for "properties") are inputs to components that allow data to be passed from one component to another. They are like function parameters that you pass to components, allowing each component to receive values and functions from its parent component and use them to render customized content or handle specific actions. Props make components reusable by enabling them to accept dynamic values.

### Key Characteristics of Props in React

1. **Read-Only**: 
   - Props are **immutable**—they cannot be modified within the component that receives them. This helps maintain a unidirectional data flow in React.

2. **Passed from Parent to Child**:
   - Props are passed down from a parent component to a child component, creating a top-down data flow. 

3. **Dynamic Values**:
   - They allow components to display dynamic data or respond to user interactions, making the UI more flexible and adaptable.

### Why Use Props?

Props make components flexible and reusable by letting us change their output without altering the component's internal logic. With props, you can:

- Customize the appearance and behavior of components.
- Pass data from parent to child components, such as a user’s name, an item list, or any other data.
- Handle events in parent components based on actions in child components, making the code modular and manageable.

### How to Use Props in React

#### 1. Passing Props from Parent to Child

In a parent component, you can pass values as attributes when using the child component.

```jsx
// Parent Component
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

// Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

In this example:
- The `App` component renders two `Welcome` components with different `name` props.
- Each `Welcome` component receives `name` as a prop and renders a personalized greeting.

#### 2. Using Props in Functional Components

In a functional component, props are received as a function argument.

```jsx
function Greeting(props) {
  return <h1>Welcome, {props.name}!</h1>;
}
```

#### 3. Using Props in Class Components

In a class component, props are accessed with `this.props`.

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}
```

### Example: Passing Multiple Props

Props can be used to pass multiple values to a component.

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Usage
<UserCard name="Alice" email="alice@example.com" />
<UserCard name="Bob" email="bob@example.com" />
```

### Example: Passing Functions as Props

You can also pass functions as props to handle events or perform actions in child components.

```jsx
function App() {
  const sayHello = (name) => {
    alert(`Hello, ${name}`);
  };

  return <Greeting name="Alice" onGreet={sayHello} />;
}

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <button onClick={() => props.onGreet(props.name)}>Greet</button>
    </div>
  );
}
```

In this example:
- The `App` component passes the `sayHello` function as a prop to the `Greeting` component.
- The `Greeting` component calls `props.onGreet(props.name)` when the button is clicked, triggering the alert in the parent component.

### Destructuring Props

You can destructure props directly in the function parameter for cleaner code.

```jsx
function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}
```

### Common Use Cases of Props

1. **Displaying Data**: Pass data to render specific information in child components.
2. **Styling and Customization**: Control the appearance of components through props, such as theme color, font size, etc.
3. **Event Handling**: Pass event handlers to control what happens when a user interacts with the component.
4. **Composition of Components**: Compose complex UIs by passing components as props, which allows for flexible and reusable code structures.

### Summary

- **Props** are used to pass data from parent to child components.
- They are **read-only** and ensure a **unidirectional data flow**.
- Props can contain any type of data, including numbers, strings, objects, arrays, and even functions.
- They enhance the flexibility, reusability, and modularity of components in React.

Props are essential to React’s component-driven approach, enabling you to create dynamic, reusable, and maintainable user interfaces.

---
## Config driven UI?
---
A **config-driven UI** is a user interface that is generated dynamically based on a configuration file or object, rather than being hardcoded in the application. In a config-driven UI, settings such as layout, styling, content, or functionality are defined externally in a configuration file (e.g., JSON or YAML). The application reads this configuration at runtime and renders the UI based on the specified parameters.

### Key Concepts of Config-Driven UI

1. **Configuration Files**:
   - The UI's structure and behavior are determined by an external configuration file or object, typically in JSON or YAML format.
   - These files define components, layouts, content, and other parameters, making the UI adaptable without altering the core codebase.

2. **Separation of Logic and Presentation**:
   - Config-driven UIs separate the app’s presentation logic from its core code, enabling more flexible and maintainable design.
   - This approach allows non-developers or designers to modify the UI's layout, style, and content without needing to understand or change the codebase.

3. **Dynamic Rendering**:
   - The UI is rendered based on the data in the config file, meaning that changes in the configuration immediately affect the UI without code modifications.
   - Components are often built to be highly reusable and modular so they can be rearranged or restyled by updating the configuration.

### How Config-Driven UI Works

1. **Define Configuration**:
   - Configuration files contain all the necessary settings for UI elements, such as component types, properties, layout, styles, and interactions.
   
   ```json
   // Example configuration (JSON)
   {
     "header": {
       "title": "Welcome",
       "showLoginButton": true
     },
     "layout": {
       "sections": [
         {
           "type": "card",
           "title": "Profile",
           "content": "userProfile"
         },
         {
           "type": "list",
           "data": "userTasks"
         }
       ]
     }
   }
   ```

2. **Read Configuration at Runtime**:
   - The application reads the configuration at runtime and determines the components to render, where to place them, and what data or styles to apply.

3. **Render Components Based on Configuration**:
   - Components in the UI are created dynamically according to the configuration data. The UI framework (e.g., React, Angular) renders the components and applies properties based on the config data.

### Benefits of Config-Driven UI

1. **Flexibility and Scalability**:
   - Config-driven UI allows rapid UI changes without altering the application’s code, making it easier to maintain and scale.
   
2. **Customizability**:
   - By adjusting the config file, teams can create customized versions of the app for different clients or environments.

3. **Reduces Development Time**:
   - Since the core components are reused and managed by config, developers can focus on building reusable UI components, reducing repetitive coding.

4. **Empowers Non-Developers**:
   - Designers or content managers can change the UI layout or content by updating the configuration, which reduces dependency on developers.

5. **Consistency**:
   - The UI can be easily standardized across different modules or applications by sharing and reusing configuration data, ensuring consistency.

### Example Use Cases for Config-Driven UI

1. **Dashboards**:
   - Admin or analytics dashboards that need to show different widgets, graphs, or tables based on user roles, permissions, or data availability.

2. **Form Builders**:
   - Dynamic forms where fields, validation rules, and layout are determined by config files, allowing for different forms without coding each individually.

3. **Multi-Tenant Applications**:
   - Applications that serve multiple clients and need different branding, features, or content per client can manage these variations using configuration files.

4. **Content Management Systems (CMS)**:
   - Config-driven UI allows non-technical content editors to modify the site layout, add new content sections, and adjust styling without developer intervention.

### Example of Config-Driven UI in React

In a React app, you could use a config file to define the UI structure, and then render components based on this config. Here’s a simple example:

1. **Config file (UIConfig.json)**:

   ```json
   {
     "header": {
       "title": "My App",
       "showSearchBar": true
     },
     "content": [
       {
         "type": "text",
         "content": "Welcome to the app!"
       },
       {
         "type": "button",
         "label": "Click Me"
       }
     ]
   }
   ```

2. **React Component (ConfigRenderer.js)**:

   ```jsx
   import React from "react";
   import config from "./UIConfig.json";

   const ConfigRenderer = () => {
     return (
       <div>
         <header>
           <h1>{config.header.title}</h1>
           {config.header.showSearchBar && <input type="search" placeholder="Search..." />}
         </header>

         <main>
           {config.content.map((component, index) => {
             switch (component.type) {
               case "text":
                 return <p key={index}>{component.content}</p>;
               case "button":
                 return <button key={index}>{component.label}</button>;
               default:
                 return null;
             }
           })}
         </main>
       </div>
     );
   };

   export default ConfigRenderer;
   ```

3. **Explanation**:
   - Here, the `ConfigRenderer` component reads from `UIConfig.json` and renders UI elements based on the configuration.
   - The `header` and `content` are rendered dynamically based on the values specified in the config, allowing easy modification by updating the JSON file.

### Summary

Config-driven UIs offer a flexible, dynamic approach to UI design, allowing the layout, structure, and features of an interface to be modified through configuration files rather than code. This approach simplifies customization, promotes modular development, and is ideal for applications that need adaptable or multi-tenant UIs.

---
## 1. Array `join()` Method
---
The `join()` method in JavaScript is used to **combine all elements of an array into a single string**, with a specified separator between elements. This can be useful for creating readable strings or for formatting array data.

#### Syntax
```javascript
array.join(separator);
```
- **separator** (optional): Specifies the character(s) to separate each element. If not provided, elements are separated by commas (`,`).

#### Example
```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.join());        // "apple,banana,cherry" (default separator: comma)
console.log(fruits.join(" - "));   // "apple - banana - cherry"
console.log(fruits.join(""));      // "applebananacherry"
```

- **Use Case**: Converting an array of words into a sentence, formatting arrays for display, etc.
---
## 2. Optional Chaining (`?.`)
---
**Optional chaining** (`?.`) is a feature in JavaScript that allows you to safely access nested properties in an object **without risking an error if any part of the chain is `undefined` or `null`**. This is particularly useful when dealing with deeply nested data, where some properties might not exist.

#### Syntax
```javascript
object?.property;
object?.method?.();
array?.[index];
```

#### Example
```javascript
const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
  },
};

console.log(user.address.city);       // "Wonderland"
console.log(user.address?.city);      // "Wonderland" (safe access)
console.log(user.address?.country);   // undefined (does not exist, no error)
console.log(user.profile?.bio);       // undefined (safe access to nonexistent property)

// Without optional chaining, accessing `user.profile.bio` would throw an error
// because `profile` does not exist.
```

- **Use Case**: Accessing properties from API responses, where certain data might be missing. Optional chaining improves code readability and reduces the need for multiple `if` checks.
---
## 3. Why Using `index` as Key in `map` is a Bad Practice
---
In React, **each item in a list should have a unique `key`** prop when rendered using `.map()`. The key helps React identify each element in the list and track any changes in state or data. Using an index as the key can cause problems, especially if the list changes dynamically (e.g., adding, removing, or reordering items).

#### Why Using `index` as a Key is Problematic

1. **Reordering Issues**:
   - When items in the list change positions, React may not recognize the change correctly if the index is used as the key. This can lead to unexpected behaviors because React relies on keys to track elements.

2. **Poor Performance**:
   - React may unnecessarily re-render components if keys are not unique or stable. Using indices makes the key change whenever the array order is modified, leading to performance issues.

3. **State Loss**:
   - If you are storing any local component state in items with keys based on their index, reordering or removing items will cause the state to be misaligned, resulting in unexpected behaviors.

#### Example with Index as Key (Bad Practice)
```jsx
const items = ["Item 1", "Item 2", "Item 3"];

const ListComponent = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li> // Not recommended
    ))}
  </ul>
);
```

#### Example with Unique Key (Good Practice)
If each item has a unique `id`, use that instead:
```jsx
const items = [
  { id: "a1", name: "Item 1" },
  { id: "b2", name: "Item 2" },
  { id: "c3", name: "Item 3" },
];

const ListComponent = () => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li> // Recommended
    ))}
  </ul>
);
```

### Summary
1. **`join()`**: Combines array elements into a single string, with an optional separator.
2. **Optional Chaining (`?.`)**: Safely access nested object properties without errors if properties are `undefined` or `null`.
3. **Index as Key in `.map()`**: Using indices as keys can lead to unexpected UI behaviors, performance issues, and state misalignment in dynamic lists. Using unique IDs is a more reliable practice.
